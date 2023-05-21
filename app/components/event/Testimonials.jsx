'use client';

const testimonials = [
  {
    eventTitle: 'Innovision',
    eventOrganizer: 'Event Organizer',
    message:
      'Appropriately promote cross-media functionalities whereas distributed web-readiness. Interactively recaptiualize reliable technologies after frictionless outsourcing. Appropriately leverage existing.',
  },
  {
    eventTitle: 'Innovision',
    eventOrganizer: 'Qubiquitous',
    message:
      'Enthusiastically supply alternative processes before ubiquitous ideas. Globally synthesize timely collaboration and idea-sharing via best-of-breed potentialities. Distinctively predominate extensible data without technically sound experiences. Synergistically create.',
  },
  {
    eventTitle: 'quality',
    eventOrganizer: 'Compellingly',
    message:
      'Interactively create quality action items without dynamic processes. Conveniently pontificate holistic customer service after client-centric benefits. Completely deliver cutting-edge markets via B2C outsourcing. Professionally disintermediate global ideas through cutting-edge e-markets. Enthusiastically benchmark next-generation vortals before goal-oriented schemas. Compellingly.',
  },
  {
    eventTitle: 'leadership',
    eventOrganizer: 'Globally ',
    message:
      'Assertively mesh an expanded array of leadership whereas an expanded array of vortals. Energistically repurpose go forward opportunities without collaborative action items.',
  },
  {
    eventTitle: 'leadership',
    eventOrganizer: 'Globally ',
    message:
      'Assertively mesh an expanded array of leadership whereas an expanded array of vortals. Energistically repurpose go forward opportunities without collaborative action items.',
  },
  {
    eventTitle: 'leadership',
    eventOrganizer: 'Globally ',
    message:
      'Assertively mesh an expanded array of leadership whereas an expanded array of vortals. Energistically repurpose go forward opportunities without collaborative action items.',
  },
  {
    eventTitle: 'leadership',
    eventOrganizer: 'Globally ',
    message:
      'Assertively mesh an expanded array of leadership whereas an expanded array of vortals. Energistically repurpose go forward opportunities without collaborative action items.',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonial({ testimonial }) {
  return (
    <>
      <div className='testimonial'>
        <p className='testimonial-message'>
          {testimonial.message.slice(0, 280)}
          {testimonial.message.length > 280 && '...'}
        </p>
        <h5 className='testimonial__event-title'>{testimonial.eventTitle}</h5>
        <h3 className='testimonial__event-organizer'>
          {testimonial.eventOrganizer}
        </h3>
      </div>
    </>
  );
}

export default function Testimonials() {
  return (
    <>
      <div className='Testimonials'>
        <Swiper spaceBetween={30} slidesPerView={3}>
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide>
              <Testimonial key={idx} testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
