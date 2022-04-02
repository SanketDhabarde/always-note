import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="center-div">
      <div className="footer-content p-4">
        <p className="pt-2">
          Made with{" "}
          <span className="footer-icon">
            <i className="fas fa-heart"></i>
          </span>{" "}
          by Sanket Dhabarde
        </p>
        <div className="footer-link mt-2 center-div">
          <a
            className="m-1"
            href="https://github.com/SanketDhabarde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="m-1"
            href="https://twitter.com/SanketDhabarde1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="m-1"
            href="https://www.instagram.com/sanket_dhabarde/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="m-1"
            href="https://www.linkedin.com/in/sanket-dhabarde-91b028166/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
