import React from "react";
import { GrOrganization } from "react-icons/gr";
import { VscOrganization } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const ProfileInfo = ({
  photourl,
  isOrganization = false, //-> true for organization and false for club
  name = "John Doe", // taking dummy value for testing
  isVerified = true,
  facebookLink = "https://www.facebook.com/",
  LinkedinLink = "https://www.linkedin.com/",
}) => {
  return (
    <div className="profile-info">
      <div className="profile-photo">
        {photourl ? (
          <img src={photourl} alt="Profile" />
        ) : (
          <GrOrganization className="default-photo" />
        )}
      </div>
      <div className="profile-data">
        <div className="organization-club">
          {isOrganization ? (
            <>
              <GrOrganization />
              <span>Organization</span>
            </>
          ) : (
            <>
              <VscOrganization />
              <span>Club</span>
            </>
          )}
        </div>

        <div className="org-club-name">
          {name} {isVerified && <span className="blue-tick"> ✓</span>}
        </div>
        <div className="profile-links">
          <div>
            {facebookLink && (
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
            )}
            {LinkedinLink && (
              <a href={LinkedinLink} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
            )}
          </div>
          <button className="button button-secondary">Edit Page</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
