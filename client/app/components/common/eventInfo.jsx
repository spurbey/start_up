"use client";
import React from "react";
import { MdDateRange } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { RiAuctionFill } from "react-icons/ri";
import { BiPulse } from "react-icons/bi";

const EventInfo = (props) => {
    const { frequency, averageFootfall, tentativeMonth, runningFrom }  = props.props;
    // console.log(props)
  return (
    <div className="bids-info">
      <div className="info-box">
        <div className="club-joined">
          <div>
            <MdDateRange className="bids-icon" /> Frequency{" "}
          </div>
          <div className="bids-content">{frequency}</div>
        </div>
        <div className="average-rating">
          <div>
            <MdOutlineGroups className="bids-icon" />
            Average FootFall{" "}
          </div>
          <div className="bids-content">{averageFootfall}</div>
        </div>
      </div>
      <div className="info-box">
        <div className="bids-won">
          <div>
            <RiAuctionFill className="bids-icon" />
            Tentative Month{" "}
          </div>
          <div className="bids-content">{tentativeMonth}</div>
        </div>
        <div className="bids-participated">
          <div>
            <BiPulse className="bids-icon" />
            Running From{" "}
          </div>
          <div className="bids-content">{runningFrom}</div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
