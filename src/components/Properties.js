import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = ({ userID }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const { search } = useLocation();

  const handleSaveProperty = (propertyId) => {
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => setProperties(response.data))
      .catch(() => {
        setAlert({ message: "Error retriecing properties." });
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing/${search}`)
      .then(({ data }) => setProperties(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [search]);

  const propertyCards = properties.map((property) => (
    <div key={property.id} className="item">
      <PropertyCard
        property={property}
        userID={userID}
        onSave={() => handleSaveProperty(property.id)}
      />
    </div>
  ));

  return (
    <div className="properties">
      <SideBar />
      <div className="main-content">
        <h1>Properties Page</h1>
        {alert.message && <Alert message={alert.message} />}
        {propertyCards}
      </div>
    </div>
  );
};

export default Properties;
