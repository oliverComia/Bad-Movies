import React from "react";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let image = this.props.movie.poster_path
      ? `https://image.tmdb.org/t/p/w220_and_h330_face/${this.props.movie.poster_path}`
      : "https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300";
    return (
      <li className="movie_item">
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
        </div>
      </li>
    );
  }
}
