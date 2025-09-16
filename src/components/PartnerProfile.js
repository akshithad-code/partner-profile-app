import React from "react";
import "./PartnerProfile.css";
import PropertyList from "./PropertyList";

const PartnerProfile = () => {
  const partner = {
    name: "Akshitha Dafedar",
    email: "akshitha@example.com",
    location: "Bangalore, India",
    avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
  };

  const properties = [
    {
      name: "2 BHK Flat",
      category: "Residential",
      type: "Apartment",
      price: "₹50 Lakh",
      location: "Bangalore",
      status: "Available",
      image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg"
    },
    {
      name: "3 BHK Villa",
      category: "Residential",
      type: "Villa",
      price: "₹1.2 Crore",
      location: "Hyderabad",
      status: "Sold",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
    },
    {
      name: "Commercial Shop",
      category: "Commercial",
      type: "Lease",
      price: "₹80 Lakh",
      location: "Whitefield",
      status: "Available",
      image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg"
    }
  ];

  return (
    <div className="partner-profile">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={partner.avatar} alt={partner.name} className="profile-avatar" />
        <div className="profile-info">
          <h2>{partner.name}</h2>
          <p>{partner.email}</p>
          <p>{partner.location}</p>
        </div>
      </div>

      {/* Property List */}
      <PropertyList properties={properties} />

      {/* ✅ Action Buttons moved BELOW property cards */}
      <div className="profile-actions">
        <button className="edit-btn">Edit Profile</button>
        <button className="contact-btn">Contact Partner</button>
      </div>
    </div>
  );
};

export default PartnerProfile;