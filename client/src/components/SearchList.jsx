import React from "react";

const SearchList = ({ genre }) => {
  return <option value={genre.name}>{genre.name}</option>;
};

export default SearchList;
