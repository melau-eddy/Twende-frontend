import { useContext, useState } from 'react';
import { FaInfo } from 'react-icons/fa6';
import { GlobalContext } from '../../context/GlobalContext';
import Shuttlescard from '../shuttles/Shuttlescard';
import ModalWindow from '../../components/ModalWindow';
import Booking from './Booking';

export default function ScheduledDepartures() {
  const [bookingModal, setBookingModal] = useState(false);
  const globalContext = useContext(GlobalContext);
  const routesFilter = globalContext?.routesFilter;

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-5">
          Scheduled <span className="text-red-400">Departures</span>
        </h1>
        {!routesFilter ? (
          <p className="text-xs flex flex-row justify-center bg-slate-100 p-5 ">
            <FaInfo />
            Please specify the travel route and date above to view all scheduled departures and book your ticket
          </p>
        ) : (
          <Shuttlescard setBookingModal={setBookingModal} />
        )}
      </div>

      <ModalWindow showmodal={bookingModal}>{<Booking onModalClose={() => setBookingModal(false)} />}</ModalWindow>
    </>
  );
}
