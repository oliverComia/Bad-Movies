//Select one db to work with:

//For SQL
const sqlDb = require("../../db/sql");
//For Mongo
const mongoDb = require("../../db/mongodb");

module.exports = {
  create: (movie) => {
    return mongoDb.createMovie(movie);
  },
  getFavorites: () => {
    return mongoDb.getFavorites();
  },
};
