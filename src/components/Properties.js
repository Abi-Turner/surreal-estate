import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => setProperties(response.data))
      .catch((error) => {
        setAlert({ message: "Error retriecing properties." });
      });
  }, []);

  const propertyCards = properties.map((property) => (
    <div key={property.id} className="item">
      <PropertyCard property={property} />
    </div>
  ));

  return (
    <div className="properties">
      <h1>Properties Page</h1>
      {alert.message && <Alert message={alert.message} />}
      {propertyCards}
    </div>
  );
};

export default Properties;
