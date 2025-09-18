import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h2>{property.property_name || 'No Title'}</h2>
      <p>Category: {property.category_name}</p>
      <p>Subcategory: {property.sub_category_name}</p>
      <p>Type: {property.property_type}</p>
      <p>Rent Price: {property.rent_price || 'N/A'}</p>
      <p>Location: {property.location}</p>
      <p>Status: {property.status}</p>
      <p>Created by: {property.created_by?.name}</p>
      <img
        src={property.cover_image?.url}
        alt={property.property_name}
        style={{ width: '100%', maxWidth: '300px', marginTop: '10px' }}
      />
    </div>
  );
};

export default PropertyCard;