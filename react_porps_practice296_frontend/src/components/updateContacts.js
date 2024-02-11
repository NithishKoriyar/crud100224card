import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

function UpdateContact() {
  let navigate = useNavigate();
  const { id } = useParams(); // Access URL parameter
  const [fetchedData, setFetchedData] = useState({ name: '', email: '', phone: '', img: '' });

  useEffect(() => {
    // Fetch contact data by ID
    axios.get("http://localhost:3001/getContactById", { params: { id } })
      .then(res => {
        setFetchedData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]); // Dependency array includes id to re-run the effect when the id changes

  useEffect(() => {
    // Set form fields with fetched data
    setName(fetchedData.name);
    setEmail(fetchedData.email);
    setPhone(fetchedData.phone); // Assuming the property is 'phone' in the response
    setImg(fetchedData.imgurl);
  }, [fetchedData]); // Dependency array includes fetchedData to re-run the effect when fetchedData changes

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imgurl, setImg] = useState('');

  function submitForm(e) {
    e.preventDefault(); // Prevent default form submission behavior
    axios.post("http://localhost:3001/update", { name, email, phone, imgurl,id })
      .then(res => console.log(res))
      .catch(err => console.log(err));
      navigate(`/`)
  }

  return (
    <form className="AddContact" onSubmit={submitForm}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        value={imgurl}
        onChange={(e) => setImg(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UpdateContact;
