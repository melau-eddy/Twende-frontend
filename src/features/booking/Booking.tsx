import BusSeatComponent from '../shuttles/BusSeatComponent';
import { FaRegWindowClose } from 'react-icons/fa';
import BookingConfirmation from './BookingConfirmation';
import Button from '../../components/Button';
import ticketSVG from '../../assets/ticket-svgrepo-com.svg';
import { useContext, useState } from 'react';
import TicketDownload from './TicketDownload';
import { GlobalContext } from '../../context/GlobalContext';

type BookingProps = {
  onModalClose: () => void;
};

export default function Booking({ onModalClose }: BookingProps) {
  const [downloadTicket, setDownloadTicket] = useState(false);
  const globalContext = useContext(GlobalContext);
  const username = globalContext?.currentUser;
  const phoneNumber = globalContext?.phoneNumber;
  const amount = globalContext?.transportAmount;
  const from = globalContext?.travellingFrom;
  const destination = globalContext?.destination;
  const seats = globalContext?.selectedSeatsCount;
  const payedAmount = Number(seats) * Number(amount);

  return (
    <div className="fixed right-0 h-screen w-[420px] bg-white p-5">
      <div className="flex flex-col gap-5">
        <div className="w-full flex justify-end border-b-2 pb-3">
          <FaRegWindowClose className=" text-2xl cursor-pointer" title="close" onClick={() => onModalClose()} />
        </div>

        <div className="flex flex-col gap-10">
          <BusSeatComponent totalSeats={14} />
          <BookingConfirmation setDowloadTicket={setDownloadTicket} />
          {downloadTicket && (
            <Button
              onClick={() => TicketDownload(username, phoneNumber, payedAmount, from, destination, seats)}
              type="primary"
              className=" max-w-xs self-center flex flex-row items-center gap-2"
            >
              <img src={ticketSVG} alt="Ticket svg" className=" h-4" />
              Download ticket
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
