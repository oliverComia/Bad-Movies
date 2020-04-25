const movieModel = require("../models/movieModel.js");
const apiHelpers = require("../helpers/apiHelpers.js");
const axios = require("axios");

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    let genreId = req.query.id;
    apiHelpers
      .getAllMovies(genreId)
      .then((result) => {
        res.json(result.data);
      })
      .catch(() => res.sendStatus(404));
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
    apiHelpers
      .getGenres()
      .then((result) => {
        // console.log(result.data);
        res.json(result.data);
      })
      .catch((err) => res.sendStatus(404));
  },
  saveMovie: (req, res) => {
    movieModel
      .create(req.body)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  },
  deleteMovie: (req, res) => {},
  getFavorites: (req, res) => {
    movieModel
      .getFavorites()
      .then((result) => {
        res.json(result);
      })
      .catch(() => res.sendStatus(500));
  },
};
