import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileHeader from './ProfileHeader';
import PropertyList from './PropertyList';

const PartnerProfile = () => {
  const [partner, setPartner] = useState({
    name: '',
    email: '',
    properties: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          'https://mobileapi.sarhul.com/api/fetch-nearby-property?page=1&lat=12.9716&lng=77.5946&radius=1000&tag=&search=&looking_for=&user_uuid=1a33f2ee-d024-4161-87c6-814c9705ac6f',
          {
            headers: {
              accept: 'application/json'
            }
          }
        );

        const data = response.data;
        console.log('API Response:', data);

        setPartner({
          name: data.data[0]?.created_by?.name || '',
          email: data.data[0]?.created_by?.email || '',
          properties: data.data || []
        });
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <div>Loading Partner...</div>;

  return (
    <div>
      <ProfileHeader partner={partner} />
      <PropertyList properties={partner.properties} />
    </div>
  );
};

export default PartnerProfile;