"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function EventBrief({ event }) {
  return (
    <>
      <div className="event-brief">
        <h5 className="event-brief__event-title">{event.eventTitle}</h5>
        <p className="event-brief-message">
          {event.message.slice(0, 280)}
          {event.message.length > 280 && "..."}
        </p>
      </div>
    </>
  );
}

const EventBriefs = ({ events }) => {
  return (
    <>
      <div className="EventBriefs">
        <Swiper spaceBetween={30} slidesPerView={3}>
          {events.map((event, idx) => (
            <SwiperSlide key={idx}>
              <EventBrief key={idx} event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default EventBriefs;
