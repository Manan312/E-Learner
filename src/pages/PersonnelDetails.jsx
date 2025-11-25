import React, { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate, Navigate } from "react-router-dom";
import "../styles/pages/PersonnelDetails.css";
import NotFound from "./NotFound";
import loaderGif from "../imgs/Loader.gif";
export default function PersonnelDetails({ seed, setSeed }) {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = "E-Learner - Personnel Details";
    setPerson(state || null);
    setLoading(false);
  }, [state]);
  if (loading) {
    return (
      <div className="loaderContainer">
        <img src={loaderGif} alt="Loading..." className="loaderGif" />
      </div>
    );
  }

  // ✅ Finished loading, but no person found
  if (!person) {
    return <Navigate to="/notfound" replace />;
  }
  return (
    <div className="person-page">
      <button
        className="back-btn"
        onClick={() => {
          setSeed(seed);
          navigate(-1);
        }}
      >
        ← Back
      </button>

      <div className="person-card">
        <div className="person-image">
          <img src={person.picture?.large} alt="Profile" />
        </div>
        <div className="person-info">
          <h1 className="person-name">
            {person.name?.title} {person.name?.first} {person.name?.last}
          </h1>
          <h4 className="person-username">@{person.login?.username}</h4>

          <div className="info-grid">
            <p>
              <span>Gender</span> {person.gender}
            </p>
            <p>
              <span>Email</span> {person.email}
            </p>
            <p>
              <span>Phone</span> {person.phone}
            </p>
            <p>
              <span>Cell</span> {person.cell}
            </p>
            <p>
              <span>Age</span> {person.dob?.age}
            </p>
            <p>
              <span>DOB</span> {new Date(person.dob?.date).toLocaleDateString()}
            </p>
            <p>
              <span>Nationality</span> {person.nat}
            </p>
            <p>
              <span>Country</span> {person.location?.country}
            </p>
            <p>
              <span>State</span> {person.location?.state}
            </p>
            <p>
              <span>City</span> {person.location?.city}
            </p>
            <p>
              <span>Street</span> {person.location?.street?.number}{" "}
              {person.location?.street?.name}
            </p>
            <p>
              <span>Postcode</span> {person.location?.postcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
