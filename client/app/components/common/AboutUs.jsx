"use client";

import React from "react";

const AboutUs = ({ content }) => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <p className="about-us-content">{content}</p>
    </div>
  );
};

export default AboutUs;
