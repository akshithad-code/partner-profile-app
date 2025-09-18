import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return <p>No properties found</p>;
  }

  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property.uuid} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;