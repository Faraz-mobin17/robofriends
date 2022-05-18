import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const SearchBox = ({ onSearchChange }) => {
  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search..."
        className="form-control border-0 shadow p-3"
        onChange={onSearchChange}
      />
    </>
  );
};

export default SearchBox;
