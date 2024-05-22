import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <Link className="social-icon__link" to="https://github.com/DhyanShah22">
            <ion-icon name="logo-github"></ion-icon>
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="https://x.com/KyaYaaarDhyan">
            <ion-icon name="logo-twitter"></ion-icon>
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="https://www.linkedin.com/in/dhyanshah22/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </Link>
        </li>
      </ul>
      <p>&copy;2024 Login Signup | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
