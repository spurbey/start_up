"use client";
import { useState } from "react";
import Filter from "../components/common/filter";

export default function HomePageClub() {
  const [hide_filter, set_hide_filter] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange =(event)=>{
    setSliderValue(event.target.value);
  }
  return (
    <>
      <div class="home-page">
        {!hide_filter && <Filter />}
        <div className="event-bid-card-layout">
          <div className="search-createEvent-container">
            <input
              type="text"
              placeholder="Search..."
              className="homepage-search"
            />
            <button className="create-event-btn">Create Event</button>
          </div>

          <p>Showing 120 events for Ecell</p>

          <section className="card">
            <h3 className="title">Title sponsers</h3>
            <div className="first-col">
              <div className="logo-container">
                {/* <img src="" alt="" width={50} height={50}/> */}
              </div>
              <p>Ecell Ntr</p>
            </div>
            <div className="second-col">
              {" "}
              <h1>Innovision</h1>
              <span>Annual fest of Ntr</span>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="4"
                  value={sliderValue}
                  className="slider"
                  id="myRange"
                  onChange={handleSliderChange}
                />
               <p>{sliderValue}</p> 
              </div>
            </div>
            <div className="third-col">
              <p>1 day left</p>
            </div>
          </section>

          <div className="event-tags">
                <span>Enterpreneur</span>
                <span>college event</span>
                <span>Hybrid</span>
                <span>All india</span>
              </div>
             
        </div>
      </div>
    </>
  );
}
