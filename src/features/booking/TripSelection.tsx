'use client';
import { useState } from 'react';
import Button from '../../components/Button';
import TravelForm from './TravelForm';

export default function TripSelection() {
  const [isOneWaySelected, setOneWaySelected] = useState(true);

  const handleOneWayClick = () => {
    setOneWaySelected(true);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Button type={'variable'} onClick={handleOneWayClick} selected={isOneWaySelected}>
            One Way
          </Button>
        </div>
        <TravelForm />
      </div>
    </div>
  );
}
