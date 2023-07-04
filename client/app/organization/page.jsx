<<<<<<< HEAD
import React from 'react';

export default function OranizationPage() {
  return <div>OranizationPage</div>;
}
=======
import React from "react";
import ProfileInfo from "../components/common/ProfileInfo";
import AboutUs from "../components/common/AboutUs";
import BidsInfo from "../components/common/BidsInfo";
import Testimonials from "../components/event/Testimonials";
import QuestionAns from "../components/common/QuestionAns";

const OrganizationPage = () => {
  const profileData = {
    photourl:
      "https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1",
    isOrganization: true,
    name: "Google",
    isVerified: true,
    facebookLink: "https://www.facebook.com",
    linkedinLink: "https://www.linkedin.com",
  };

  const aboutUsContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eligendi culpa distinctio dolor dolorum excepturi eius blanditiis aliquam! Quasi facilis sed vitae, minima omnis dicta et necessitatibus natus quisquam recusandae.";
  const joined = "2022-01-01";
  const averageRating = 8.5;
  const bidsWon = 10;
  const bidsParticipated = 20;

  const questionsAndAnswers = [
    {
      question: "What can you expect from us?",
      answer: "We provide Sponsorship.",
    },
    {
      question: "Where do we sponsor?",
      answer: "College events, Celebrity events.",
    },
    {
      question: "What we expect from events?",
      answer: "Promotion.",
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
  const eventSponsoredContent = ["Bulletin", "Innovision", "Cosmopolition"];
  return (
    <div className="org-page">
      <div className="profileinfo">
        <ProfileInfo data={profileData} />
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
      <div className="org-row-2">
        <div className="questions-answers">
          {questionsAndAnswers.map((qa, index) => (
            <QuestionAns
              key={index}
              question={qa.question}
              answer={qa.answer}
            />
          ))}
        </div>
        <div className="event-sponsored">
          <h2 className="event-sponsored-title">Events Sponsored</h2>
          <ul className="event-sponsored-content">
            {eventSponsoredContent.map((item, index) => (
              <li key={index}>
                <span className="dot"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="testimonials">
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
  );
};

export default OrganizationPage;
>>>>>>> 2946175bc7b4ff1066a7455ccf90c4985e8ee805
