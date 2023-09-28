import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setSelectedContact(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchSelectedContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      {selectedContact ? (
        <div>
          <h2>{selectedContact.name}</h2>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
          {/* Add additional contact details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}