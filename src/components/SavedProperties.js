import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";

const SavedProperties = ({ userID }) => {
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/Favourite?fbUserId=${userID}`)
      .then((response) => {
        setSavedProperties(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, [savedProperties]);

  const savedPropertyCards = savedProperties.map((savedProperty) => (
    <div key={savedProperty.id} className="item">
      <PropertyCard property={savedProperty.propertyListing} />
    </div>
  ));

  return (
    <div className="saved-properties">
      <h2>Saved Properties</h2>
      {savedProperties.length ? savedPropertyCards : <p>No saved properties</p>}
    </div>
  );
};

export default SavedProperties;
