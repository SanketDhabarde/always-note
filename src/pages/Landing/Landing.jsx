import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components";
import "./Landing.css";

function Landing() {
  return (
    <>
      <main className="grid-2-col">
        <div className="content center-div p-5">
          <div className="welcome">
            <h2>Meet your modern</h2>
            <h2 className="landing-heading">Note Taking App</h2>
            <p className="welcome-content">
              Manage your daily tasks and workflow in a modern way and boost
              your efficiency without any efforts.
            </p>
          </div>
          <div className="get-started pt-4">
            <Link to="/home" className="btn btn-primary btn-link">
              Join Now
            </Link>
          </div>
        </div>
        <div className="center-div hero-img p-5">
          <img src="/hero.svg" alt="hero" className="img-responsive" />
        </div>
      </main>
      <hr className="separator" />
      <Footer />
    </>
  );
}

export default Landing;
