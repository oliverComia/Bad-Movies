//
const Promise = require("bluebird");
// const mongoose = Promise.promisifyAll(require("mongoose"));
const mongoose = require("mongoose");
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/badmovies", {
    useNewUrlParser: true,
  });
}

// mongoose.connect("mongodb://localhost/badmovies");

const db = mongoose.connection;

const moviesSchema = new mongoose.Schema({
  adult: Boolean,
  backdrop_path: String,
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
});

const MovieModel = mongoose.model("Movie", moviesSchema);

mongoose.Promise = Promise;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to db...");
});

module.exports.db = db;

module.exports.createMovie = (movie) => {
  return MovieModel.create(movie);
};

module.exports.getFavorites = () => {
  return MovieModel.find();
};
