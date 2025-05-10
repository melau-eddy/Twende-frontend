import { Dispatch, SetStateAction, useContext } from 'react';
import { FaBus, FaRoute, FaCalendar, FaClock, FaCouch, FaTicketAlt } from 'react-icons/fa';
import TransitInfoCard from './TransitInfoCard';
import Button from '../../components/Button';
import { GlobalContext } from '../../context/GlobalContext';

type AvailableShuttlesProps = {
  setBookingModal: Dispatch<SetStateAction<boolean>>;
  from: string;
  to: string;
  date: string;
  time: string;
  seats: number;
  price: string;
  busNumber: string;
  numberPlate: string;
};

export default function AvailableShuttles({
  setBookingModal,
  from,
  to,
  date,
  time,
  seats,
  price,
  busNumber,
  numberPlate,
}: AvailableShuttlesProps) {
  const globalContext = useContext(GlobalContext);
  const user = globalContext?.currentUser;
  const setTransportAmount = globalContext?.setTransportAmount;
  const setLoginModal = globalContext?.setLoginModal;
  setTransportAmount!(price);

  const handleButtonClick = () => {
    if (!user) {
      setLoginModal && setLoginModal(true);
      return;
    }
    globalContext?.setTravellingFrom(from);
    globalContext?.setDestination(to);
    globalContext?.setSelectedShuttle(busNumber);
    setBookingModal(true);
  };
  return (
    <div className="flex flex-col items-end gap-4 border shadow-md rounded-3xl border-gray-100 px-6 py-8 bg-white">
      <div className="flex flex-row gap-16 w-full justify-center">
        <TransitInfoCard title="Route:" details={`${from} to ${to}`} icon={<FaRoute />} />
        <TransitInfoCard title="Bus Number:" details={numberPlate} icon={<FaBus />} />
        <TransitInfoCard title="Date:" details={date.slice(0, 10) ?? ''} icon={<FaCalendar />} />
        <TransitInfoCard title="Departure:" details={time} icon={<FaClock />} />
        <TransitInfoCard title="Availability:" details={`${seats} Seats available`} icon={<FaCouch />} />
        <TransitInfoCard title="Ticket Price:" details={price} icon={<FaTicketAlt />} />
      </div>

      <Button type="primary" className="w-fit" onClick={handleButtonClick}>
        Book Seat
      </Button>
    </div>
  );
}
