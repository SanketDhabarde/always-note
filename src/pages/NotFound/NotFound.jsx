import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="center-div">
      <div className="page-not-found-card">
        <img
          src="/page_not_found.svg"
          alt="404page"
          className="img-responsive"
        />
        <h1 className="text-center">Hit the wrong route😔</h1>
      </div>
    </main>
  );
}

export default NotFound;
