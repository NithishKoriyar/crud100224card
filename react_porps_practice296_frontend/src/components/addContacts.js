import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

function AddContact() {
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("email");
  const [phone, setPhone] = useState("phone");
  const [img, setImg] = useState("img");
  // console.log(name);
  // console.log(email);
  // console.log(phone);
  // console.log(img);

  function submitForm() {
    //     console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(img);
    axios
      .post("http://localhost:3001/add_contacts", { name, email, phone, img })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <form className="AddContact" onSubmit={submitForm}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="phone number"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="image link"
        onChange={(e) => setImg(e.target.value)}
        required
      />
      <button>submit</button>
    </form>
  );
}
export default AddContact;
