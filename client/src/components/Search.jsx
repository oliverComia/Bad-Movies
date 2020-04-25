import React from "react";
const axios = require("axios");
import SearchList from "./SearchList.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    };
    this.getGenres = this.getGenres.bind(this);
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
        <select>
          {this.state.genres.map((genre) => {
            return <SearchList genre={genre} key={genre.id} />;
          })}
        </select>
        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
