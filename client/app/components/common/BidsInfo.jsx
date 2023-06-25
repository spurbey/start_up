"use client";
import React from "react";
import { MdDateRange } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { RiAuctionFill } from "react-icons/ri";
import { BiPulse } from "react-icons/bi";

const Bidsinfo = ({ joined, averageRating, bidsWon, bidsParticipated }) => {
  return (
    <div className="bids-info">
      <div className="info-box">
        <div className="club-joined">
          <div>
            <MdDateRange className="bids-icon" /> Joined{" "}
          </div>
          <div className="bids-content">{joined}</div>
        </div>
        <div className="average-rating">
          <div>
            <MdOutlineGroups className="bids-icon" />
            Average Rating{" "}
          </div>
          <div className="bids-content">{averageRating}/10</div>
        </div>
      </div>
      <div className="info-box">
        <div className="bids-won">
          <div>
            <RiAuctionFill className="bids-icon" />
            Bids Won{" "}
          </div>
          <div className="bids-content">{bidsWon}</div>
        </div>
        <div className="bids-participated">
          <div>
            <BiPulse className="bids-icon" />
            Bids Participated{" "}
          </div>
          <div className="bids-content">{bidsParticipated}</div>
        </div>
      </div>
    </div>
  );
};

export default Bidsinfo;
