import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerContent">
          <h3 className="footerLogo">MyCourses</h3>

          <div className="footerLinks">
            <Link to="/">Home</Link>
            <Link to="/personnel">Personnel</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <p className="footerCopy">
            © {new Date().getFullYear()} MyCourses. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
