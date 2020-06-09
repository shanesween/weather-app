import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/reducer";

export const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(null, null, search));

    console.log("Fetching Weather");
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <input
        className="form-control bg-transparent "
        type="text"
        onChange={handleChange}
        value={search}
        placeholder="Search City"
        required
        style={{ color: "#ffffff" }}
      />
      <button className="btn btn-primary" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
