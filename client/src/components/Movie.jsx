import React from "react";
import axios from "axios";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
    };
    this.displayAdd = this.displayAdd.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  displayAdd(e) {
    this.setState({
      showAdd: !this.state.showAdd,
    });
  }

  addMovie() {
    console.log("This POST called");
    axios
      .post("/movies/save", this.props.movie)
      .then((result) => {
        console.log("Movie POST: ", result);
        this.props.getFavorites();
      })
      .catch((err) => {
        console.log("Error in POSt: ", err);
      });
  }

  render() {
    let image = this.props.movie.poster_path
      ? `https://image.tmdb.org/t/p/w220_and_h330_face/${this.props.movie.poster_path}`
      : "https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300";
    return (
      <li className="movie_item" onClick={this.displayAdd}>
        <img src={image} />
        <div className="movie_description">
          <h2>{this.props.movie.title}</h2>
          <section className="movie_details">
            <div className="movie_year">
              <span className="title">Release Date</span>
              <span>{this.props.movie.release_date}</span>
            </div>
            <div className="movie_rating">
              <span className="title">Popularity</span>
              <span>{this.props.movie.popularity}</span>
            </div>
          </section>
          <br />
          {this.state.showAdd ? (
            <button onClick={this.addMovie}>Add Movie</button>
          ) : null}
        </div>
      </li>
    );
  }
}
