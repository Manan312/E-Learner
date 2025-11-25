import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/PersonnelList.css";

export default function PersonnelList({ person, seed }) {
  const navigate=useNavigate();
  return (
    <div className="personCard">
      <img
        src={person.picture.large}
        alt={`${person.name.first} ${person.name.last}`}
        className="personImage"
      />

      <h3 className="personName">{`${person.name.first} ${person.name.last}`}</h3>
      <p className="personRole">{person.role}</p>

      <button className="personButton" onClick={() => {navigate(`/personnel/${person.login.uuid}`+`~${seed}`,{state:person})}}>View Profile</button>
    </div>
  );
}
