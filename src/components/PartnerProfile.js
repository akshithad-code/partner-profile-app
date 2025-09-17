import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./PartnerProfile.css";
import PropertyList from "./PropertyList";

const PartnerProfile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
  axios.get("https://mobileapi.sarhul.com/api/fetch-nearby-property?page=1&lat=12.9716&lng=77.5946&radius=1000&tag=&search=&looking_for=&user_uuid=1a33f2ee-d024-4161-87c6-814c9705ac6f")
    .then((response) => {
      console.log(response.data); 
      setData(response.data);
    })
    .catch((error) => console.error(error));
}, []);
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
        <div>
  <h2>Users List</h2>
  <ul>
    {Array.isArray(data) ? data.map(item => (
  <div>{item.name}</div>
)) : null}
  </ul>
</div>
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