import { useState, useEffect, useContext } from 'react';
import Seat from './Seat';
import { GlobalContext } from '../../context/GlobalContext';

export default function BusSeatComponent({ totalSeats }: { totalSeats: number }) {
  // Generate initial seat data with random statuses
  const initialSeatData = Array.from({ length: totalSeats }, (_, index) => ({
    id: index + 1,
    status: Math.random() < 0.5 ? 'available' : 'taken', // Randomly assign 'available' or 'taken'
  }));

  const [seatData, setSeatData] = useState(initialSeatData);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    // Update seatData when selectedSeats changes
    const updatedSeats = seatData.map((seat) => ({
      ...seat,
      status: selectedSeats.includes(seat.id) ? 'selected' : seat.status,
    }));
    setSeatData(updatedSeats);
  }, [selectedSeats]);

  const handleSeatClick = (seatId: number) => {
    const clickedSeat = seatData.find((seat) => seat.id === seatId);

    if (clickedSeat && clickedSeat.status === 'available') {
      setSelectedSeats((prevSelected) => [...prevSelected, seatId]); // Select the seat
    }
  };

  const selectedSeatsCount = selectedSeats.length;
  globalContext?.setSelectedSeatsCount(selectedSeatsCount);
  return (
    <div className="gap-20 flex flex-row p-4">
      <div>
        {/* Front Row */}
        <div className="flex gap-4">
          {seatData.slice(0, 2).map((seat) => (
            <Seat key={seat.id} id={seat.id} status={seat.status} onSeatClick={handleSeatClick} />
          ))}
        </div>
        {/* Other Rows */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {seatData.slice(2).map((seat) => (
            <Seat key={seat.id} id={seat.id} status={seat.status} onSeatClick={handleSeatClick} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 text-xs">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-6 h-3 bg-green-500"></div>
          <span>Available</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="w-6 h-3 bg-blue-500"></div>
          <span>Selected</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="w-6 h-3 bg-gray-500"></div>
          <span>Taken</span>
        </div>
      </div>
    </div>
  );
}
