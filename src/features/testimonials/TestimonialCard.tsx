import React from 'react';

type TestimonialCardProps = {
  name: string;
  testimonial: string;
};

export default function TestimonialCard({ name, testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col bg-white p-3 rounded-xl items-center py-5 gap-5 shadow-md w-72 h-48 border-gray-100">
      <h1 className=" text-lg font-bold tracking-wide text-stone-800">{name}</h1>
      <p className=" text-xs text-gray-500 text-wrap">{testimonial}</p>
    </div>
  );
}
