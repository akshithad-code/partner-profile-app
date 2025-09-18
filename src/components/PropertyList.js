import React from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties = [] }) {
  if (!properties || properties.length === 0) {
    return <p>No properties found.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {properties.map((prop, idx) => (
        <PropertyCard key={prop.id || prop._id || idx} property={prop} />
      ))}
    </div>
  );
}