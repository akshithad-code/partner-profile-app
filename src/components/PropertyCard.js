
import React from "react";

function PropertyCard({ property }) {
  if (!property) return null;

  const title = property.title || property.name || "Untitled Property";
  const location = property.location || "Unknown location";
  const description = property.description || "";
  const imageUrl = property.imageUrl || property.image || "";
  const price = property.price || "";

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 12,
        borderRadius: 8,
        background: "#f9f9f9",
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{ maxWidth: "100%", marginBottom: 10, borderRadius: 5 }}
        />
      )}
      <h3>{title}</h3>
      <p><strong>Location:</strong> {location}</p>
      {description && <p>{description}</p>}
      {price && <p><strong>Price:</strong> {price}</p>}
    </div>
  );
}

export default PropertyCard;