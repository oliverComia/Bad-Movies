import React from "react";
const axios = require("axios");

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedGenreId: "",
    };
    this.getGenres = this.getGenres.bind(this);
    this.pickedGenre = this.pickedGenre.bind(this);
    this.chooseGenre = this.chooseGenre.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    return axios
      .get("/movies/genres")
      .then((result) => {
        console.log("Success in GET Genres: ", result);
        this.setState({
          genres: result.data.genres,
        });
      })
      .catch((error) => {
        console.log("Error in GET Genres: ", err);
      });
  }

  pickedGenre() {
    console.log("Chosen genre: ", this.state.selectedGenreId);
    this.props.getMovies(this.state.selectedGenreId);
  }

  chooseGenre(e) {
    this.setState({
      selectedGenreId: e.target.value,
    });
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />
        <select onChange={this.chooseGenre}>
          {this.state.genres.map((genre) => {
            return (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <button onClick={this.pickedGenre}>Search</button>
      </div>
    );
  }
}

export default Search;
