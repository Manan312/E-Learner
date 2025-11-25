import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/pages/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "E-Learner - 404 Not Found";
  }, []);
  return (
    <div className="notFoundWrapper">
      <h1 className="notFoundCode">404</h1>
      <h2 className="notFoundTitle">Page Not Found</h2>
      <p className="notFoundText">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="notFoundButtons">
        <button onClick={() => navigate(-1)} className="notFoundButton">
          Go Back
        </button>
        <button onClick={() => navigate("/")} className="notFoundButton">
          Go Home
        </button>
      </div>
    </div>
  );
}
