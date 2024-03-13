import React from 'react';
import { useImmer } from 'use-immer';

// Define UserProfileWithImmer component
function UserProfileWithImmer() {
  const [userProfile, setUserProfile] = useImmer({
    name: 'Aminu Abubakar',
    email: 'seattle@gmail.com',
    contactDetails: {
      phone: '',
      address: ''
    },
    preferences: {
      newsletter: false,
      notifications: false
    }
  });

  // Function to update contact details
  const updateContactDetails = (newPhone, newAddress) => {
    setUserProfile(draft => {
      draft.contactDetails.phone = newPhone;
      draft.contactDetails.address = newAddress;
    });
  };

  // Function to toggle newsletter subscription
  const toggleNewsletterSubscription = () => {
    setUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  // Render UI
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Phone: {userProfile.contactDetails.phone}</p>
      <p>Address: {userProfile.contactDetails.address}</p>
      <p>Newsletter Subscription: {userProfile.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
      
      <input type="text" placeholder="New Phone Number" onChange={e => updateContactDetails(e.target.value, userProfile.contactDetails.address)} />
      <input type="text" placeholder="New Address" onChange={e => updateContactDetails(userProfile.contactDetails.phone, e.target.value)} />
      
      <button onClick={toggleNewsletterSubscription}>
        {userProfile.preferences.newsletter ? 'Unsubscribe from Newsletter' : 'Subscribe to Newsletter'}
      </button>
    </div>
  );
}

export default UserProfileWithImmer;
