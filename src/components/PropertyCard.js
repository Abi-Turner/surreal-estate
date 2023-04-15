import React from "react";
import {
  faBed,
  faBath,
  faMapMarkerAlt,
  faEnvelope,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <h2>{title}</h2>
      <p>{type}</p>
      <p>
        <FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms
      </p>
      <p>
        <FontAwesomeIcon icon={faBath} /> {bathrooms} bathrooms
      </p>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {city}
      </p>
      <p>
        <FontAwesomeIcon icon={faMoneyBillAlt} /> {price}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> {email}
      </p>
    </div>
  );
};

export default PropertyCard;
