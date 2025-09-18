import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyList from "./PropertyList";

const PartnerProfile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://mobileapi.sarhul.com/api/fetch-nearby-property?page=1&lat=12.9716&lng=77.5946&radius=1000&tag=&search="
      )
      .then((response) => {
        console.log("API response:", response.data);
        setData(response.data);
      })
      .catch((error) => console.error("API error:", error));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {/* Partner Info */}
      <h1>{data?.partner?.name || "Loading partner..."}</h1>
      <p>{data?.partner?.location || ""}</p>
      {data?.partner?.avatar && (
        <img
          src={data.partner.avatar}
          alt="partner avatar"
          width={80}
          style={{ borderRadius: "50%", marginBottom: 20 }}
        />
      )}
      <p>Email: {data?.partner?.email || ""}</p>

      {/* Properties */}
      <h2 style={{ marginTop: 30 }}>Properties</h2>
      <PropertyList properties={data?.properties || []} />
    </div>
  );
};

export default PartnerProfile;