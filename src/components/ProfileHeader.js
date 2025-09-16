import React from "react";

function ProfileHeader({ name, email, location, avatar }) {
  return (
    <div className="profile-header">
      <img src={avatar} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;