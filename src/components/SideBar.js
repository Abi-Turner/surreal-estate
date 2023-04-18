import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <h4>Filter by City</h4>
      <ul>
        <li>
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
      </ul>
      <Link to={buildQueryString("sort", { price: 1 })}>
        Sort by Price (Low to High)
      </Link>
      <Link to={buildQueryString("sort", { price: -1 })}>
        Sort by Price (High to Low)
      </Link>
    </div>
  );
};

export default SideBar;
