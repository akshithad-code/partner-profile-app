import React from "react";

function PropertyCard({ name, category, type, price, location, status, image }) {
  return (
    <div className="property-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Category: {category}</p>
      <p>Type: {type}</p>
      <p>Price: {price}</p>
      <p>Location: {location}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default PropertyCard;