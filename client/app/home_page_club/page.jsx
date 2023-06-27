"use client";
import { useState } from "react";
import Filter from "../components/common/filter";
import Button from "../components/common/Button";

export const SmallFilter = ()=>{

  return(
    <>
    <div className="filter">
      <div className="header">Filter</div>
    </div>
    </>
  )
}
export const SmallTitleSponserDesc = () => {
  return (
    <>
      <div className="sponserDesc-container">
        <section className="sponser-desc">
          <div className="first-col">
            <div className="logo-container">
              {/* <img src="" alt="" width={50} height={50}/> */}
              <div className="logo">

              </div>
              <div className="posted-by">
                <p>posted-by</p>
                {/* photo */}
                <span>NAME</span>
              </div>
            </div>{" "}
            <div className="logo-details">
              <span>club</span>
              <p>Ecell</p>
              <div className="socialmedia">
                <p>facebook</p>
                <p>linkedin</p>
              </div>
            </div>
          </div>
          <div className="second-col">
            <Button children="frequency" />
            <Button children="average football" />
            <Button children="tentative month" />
            <Button children="running from" />
          </div>
        </section>
        <section className="sponser-about">
          <h3>About Event_name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolor qui laudantium excepturi illo harum sed explicabo hic
            provident obcaecati dicta tempore consequuntur quasi, inventore
            placeat corrupti eum voluptates aliquid, quisquam ab animi nisi
            velit veniam consequatur. Voluptatum, laborum animi!
          </p>
        </section>
        <section className="sponser-brochure">
          <p>Brochure</p>
        </section>
      </div>
    </>
  );
};

export const SmallTitleSponser = ({
  sliderValue,
  handleSliderChange,
  cardHandleClick,
}) => {
  return (
    <div className="card-small-and-desc-container">
      <section className=" card card-small" onClick={cardHandleClick}>
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
            
            <div className="slider-numbers">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                    </div>

          </div>
        </div>
      </section>
      <SmallTitleSponserDesc />
    </div>
  );
};

export default function HomePageClub() {
  const [hide_filter, set_hide_filter] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [sponserDetails, setSponserDetails] = useState(false);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const cardHandleClick = (event) => {
    if(event.currentTarget===event.target){
    setSponserDetails(()=>!sponserDetails);
    }
   
  };
  return (
    <>
      <div className="home-page">
        {sponserDetails ? <SmallFilter /> : <Filter />}
        <div className="event-bid-card-layout">
          <div className="search-createEvent-container">
            <input
              type="text"
              placeholder="Search..."
              className="homepage-search"
            />
            {/* <button className="create-event-btn">Create Event</button> */}
            <Button children="Create Event" />
          </div>

          <p className="show-events-number">Showing 120 events for Ecell</p>
          {sponserDetails ? (
            <SmallTitleSponser
              cardHandleClick={cardHandleClick}
              sliderValue={sliderValue}
              handleSliderChange={handleSliderChange}
            />
          ) : (
            <>
              <section className="card card-large" onClick={cardHandleClick}>
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
                    <div className="slider-numbers">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                    </div>
                   
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
