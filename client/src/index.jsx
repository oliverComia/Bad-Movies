import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ deway: "movies" }],
      favorites: [{ deway: "favorites" }],
      showFaves: false,
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount() {
    this.getMovies(28);
    this.getFavorites();
  }

  getMovies(genreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    return axios
      .get("/movies/search", {
        params: {
          id: genreId,
        },
      })
      .then((result) => {
        console.log("This is a result: ", result.data.results);
        this.setState({
          movies: result.data.results,
        });
      })
      .catch((err) => {
        console.log("Error in GET Movies: ", err);
      });
  }

  getFavorites() {
    return axios
      .get("/movies/favorites")
      .then((result) => {
        console.log("GET favorites: ", result);
        this.setState({
          favorites: result.data,
        });
      })
      .catch((err) => {
        console.log("Error in GET favorites: ", err);
      });
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  render() {
    let style = { overflowY: "scroll" };
    return (
      <div className="app" style={style}>
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            getFavorites={this.getFavorites}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
