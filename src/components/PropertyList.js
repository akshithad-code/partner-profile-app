import React from "react";
import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  return (
    <div className="property-listings">
      {properties.map((prop, index) => (
        <PropertyCard key={index} {...prop} />
      ))}
    </div>
  );
}

export default PropertyList;