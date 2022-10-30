import React from "react";
import "./search.css";
import { RiSearch2Fill } from "react-icons/ri";

const Search = () => {
  return (
    <div className="search-container">
      <select>
        <option value="grape">All Categories</option>{" "}
        <option value="grape">Non Alcoholic Drinks</option>
        <option select="true" value="grape">
          Alcoholic Drinks
        </option>
      </select>

      <input type="search" className="search-box" />
      <button className="search-icon">
        {" "}
        <RiSearch2Fill />
      </button>
    </div>
  );
};

export default Search;
