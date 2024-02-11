import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/contacts")
      .then((res) => {
      
        if (Array.isArray(res.data)) {
          setContacts(res.data);
        } else {
          console.error("Data is not an array:", res.data);
          setContacts([]); 
        }
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
        setContacts([]); 
      });
  }, []);

  // To check the state update, use a separate useEffect hook
  useEffect(() => {
    console.log("Updated contacts:", contacts);
  }, [contacts]);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        <Card
          key={contact.id} 
          id={contact.id}
          name={contact.name}
          img={contact.imgurl}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
