import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const SideBar = () => {
  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];

  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      {cities.map((city) => (
        <Link key={city} to={buildQueryString("query", { city })}>
          {city}
        </Link>
      ))}
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
