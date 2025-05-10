import React from 'react';

type SeatProps = {
  id: number;
  status: string;
  onSeatClick: (id: number) => void;
};

export default function Seat({ id, status, onSeatClick }: SeatProps) {
  return (
    <button
      className={`w-12 h-8 text-xs border border-gray-300 text-center rounded-md 
              ${
                status === 'available'
                  ? 'bg-green-500 cursor-pointer'
                  : status === 'selected'
                  ? 'bg-blue-500'
                  : 'bg-gray-500 cursor-not-allowed'
              }`}
      onClick={() => onSeatClick(id)}
    >
      {id}
    </button>
  );
}
