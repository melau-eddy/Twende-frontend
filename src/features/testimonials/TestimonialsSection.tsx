import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  return (
    <div className="px-10 py-20 mb-5 flex flex-col gap-5 w-full bg-stone-100">
      <h1 className="font-bold text-2xl">
        Our Happy <span className="text-red-400">travellers</span>
      </h1>

      <div className="flex flex-row items-center w-full justify-center gap-32">
        <TestimonialCard
          name="Kennedy Odhiambo"
          testimonial="Great price, amazing views of the Rift ValleyDriver was skilled, pick-up & drop-off convenient. Good budget option, just be prepared for the bumps!"
        />

        <TestimonialCard
          name="John Kiriamiti"
          testimonial="Booking with this shuttle company was a breeze! The online process was smooth, and I received my confirmation instantly. On the day of travel, the shuttle arrived right on time. Will definitely book with them again!"
        />

        <TestimonialCard
          name="Amollo Odinga"
          testimonial="Such a comfortable ride! The shuttle was clean, spacious, and had all the amenities I needed for a relaxing journey. The driver was courteous and skilled. Highly recommend this shuttle service!"
        />
      </div>
    </div>
  );
}
