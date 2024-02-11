import React from "react";
import DeleteContact from "./delete";
import { useNavigate } from "react-router-dom";

function Card(propsCard) {
  // Use useNavigate hook
  let navigate = useNavigate();

  function Delete() {
    DeleteContact(propsCard.id);
  }

  function HandleUpdate() {
    // Use navigate function with template literals
    navigate(`/update/${propsCard.id}`);
  }

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{propsCard.name}</h2>
        <img className="circle-img" src={propsCard.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{propsCard.tel}</p>
        <p className="info">{propsCard.email}</p>
      </div>

      <button onClick={Delete}>delete</button>
      <button onClick={HandleUpdate}>update</button>
    </div>
  );
}

export default Card;
