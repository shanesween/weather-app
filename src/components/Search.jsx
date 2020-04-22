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
    dispatch(fetchWeather(search));

    console.log("Fetching Weather");
  };

  return (
    <div className="input-container">
      <form className="my-3 w-100" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control  border-primary"
            onChange={handleChange}
            value={search}
            placeholder="Enter a location"
            required
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
