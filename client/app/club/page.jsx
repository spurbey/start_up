import React from "react";
import ProfileInfo from "../components/common/ProfileInfo";
import AboutUs from "../components/common/AboutUs";
import BidsInfo from "../components/common/BidsInfo";
import Testimonials from "../components/event/Testimonials";
import Organizers from "../components/common/Organizers";
import Button from "../components/common/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import EventBriefs from "../components/event/EventsBrief";
import Carousel from "../components/common/Carousel";

const ClubPage = () => {
  const dummyOrganizers = [
    {
      name: "John Doe",
      profilePhoto: "",
      post: "President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
  ];
  const images = [
    {
      imageUrl:
        "https://educationbytes.in/wp-content/uploads/2022/07/NIT-rourkela.jpg",
      description: "Image 1 description",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipMlIUQZELzD3KdfU4PXWjF2kIXgWppFCswAdsX_=s1360-w1360-h1020",
      description: "Image 2 description",
    },
    {
      imageUrl:
        "https://images.shiksha.com/mediadata/images/1607331878phpYmd02Y.jpeg",
      description: "Image 2 description",
    },
    {
      imageUrl:
        "https://images.shiksha.com/mediadata/images/1488266730php8RK6HL.jpeg",
      description: "Image 2 description",
    },
  ];
  const testimonials = [
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eventTitle: "Event 1",
      eventOrganizer: "Organizer 1",
    },
    {
      message: "Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
      eventTitle: "Event 2",
      eventOrganizer: "Organizer 2",
    },
    {
      message:
        "Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
      eventTitle: "Event 3",
      eventOrganizer: "Organizer 3",
    },
  ];

  const eventsBrief = [
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eventTitle: "Event 1",
      eventOrganizer: "Organizer 1",
    },
    {
      message:
        "Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
      eventTitle: "Event 2",
      eventOrganizer: "Organizer 2",
    },
    {
      message:
        "Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
      eventTitle: "Event 3",
      eventOrganizer: "Organizer 3",
    },
  ];

  const joined = "2022-01-01";
  const averageRating = 8.5;
  const bidsWon = 10;
  const bidsParticipated = 20;

  const aboutUsContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat vestibulum augue, eu semper lectus dignissim ac. Fusce vel malesuada massa, sed malesuada felis. Aliquam fermentum sem a ex pellentesque, eget eleifend elit volutpat. Sed dapibus efficitur tristique.";

  return (
    <div className="club-page">
      <div className="profileinfo">
        <ProfileInfo />
        <div className="club-buttons">
          <Button>
            <AiOutlinePlus className="club-icon" /> Create Event
          </Button>
          <Button>
            <FaHandshake className="club-icon" /> Collaborate
          </Button>
        </div>
      </div>
      <div className="about-bids">
        <div className="aboutus">
          <AboutUs content={aboutUsContent} />
        </div>
        <div className="bidsinfo">
          <BidsInfo
            joined={joined}
            averageRating={averageRating}
            bidsWon={bidsWon}
            bidsParticipated={bidsParticipated}
          />
        </div>
      </div>
      <div>
        <h1>Sliding Image Carousel</h1>
        <Carousel images={images} />
      </div>
      <div className="events-brief">
        <EventBriefs events={eventsBrief} />
      </div>
      <div className="testimonials">
        <Testimonials testimonials={testimonials} />
      </div>
      <div className="organizers">
        <Organizers organizers={dummyOrganizers} />
      </div>
    </div>
  );
};

export default ClubPage;
