"use client";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import Button from "./Button";

const Organizers = ({ organizers }) => {
  if (!organizers || organizers.length === 0) {
    return null;
  }

  return (
    <div className="organizersContainer">
      <h1>Organizers</h1>
      <div className="organizersList">
        {organizers.map((organizer, index) => (
          <div className="organizer" key={index}>
            {organizer.profilePhoto ? (
              <img src={organizer.profilePhoto} alt="Profile" />
            ) : (
              <AiOutlineUser className="defaultProfileIcon" />
            )}
            <h2>{organizer.name}</h2>
            <p>{organizer.post}</p>
            <button className="button button-secondary">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizers;
