import React from 'react';

const ProfileHeader = ({ partner }) => {
  return (
    <div>
      <h1>{partner.name || 'No Name Available'}</h1>
      <p>Email: {partner.email || 'No Email Available'}</p>
    </div>
  );
};

export default ProfileHeader;