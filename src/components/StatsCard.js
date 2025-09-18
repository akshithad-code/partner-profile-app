import React from 'react';

const StatsCard = ({ properties }) => {
  return (
    <div>
      <h3>Total Properties: {properties ? properties.length : 0}</h3>
    </div>
  );
};

export default StatsCard;