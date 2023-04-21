import React from "react";
import {
  faBed,
  faBath,
  faMapMarkerAlt,
  faEnvelope,
  faSterlingSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/property-card.css";

const PropertyCard = ({ property }) => {
  const {
    _id,
    title,
    type,
    bathrooms,
    bedrooms,
    price,
    city,
    email,
    onSaveProperty,
    userID,
  } = property;

  return (
    <div className="property-card">
      <h2>{title}</h2>
      <p className="property-type">{type}</p>
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
        <FontAwesomeIcon icon={faSterlingSign} /> {price}
      </p>
      <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
        <span>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="1x"
            style={{
              backgroundColor: "purple",
              padding: "10px",
              borderRadius: "90%",
              color: "white",
            }}
          />
        </span>
      </a>
      {userID && (
        <button
          type="button"
          onClick={() => onSaveProperty(_id)}
          className="save"
        >
          <FontAwesomeIcon icon={faStar} />
          <span>Save</span>
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
