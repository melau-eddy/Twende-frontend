import { Dispatch, SetStateAction, useContext } from 'react';
import AvailableShuttles from './AvailableShuttles';
import { GlobalContext } from '../../context/GlobalContext';
import useTravelRoutes from '../../lib/hooks/useTravelRoutes';
import formatDate from '../../lib/utils/formatDate';

type ShuttlesCardProps = {
  setBookingModal: Dispatch<SetStateAction<boolean>>;
};

export default function Shuttlescard({ setBookingModal }: ShuttlesCardProps) {
  const globalContext = useContext(GlobalContext);
  const routesFilter = globalContext?.routesFilter;

  const departureDate = routesFilter?.departureDate;
  const departure = routesFilter?.departure;
  const destination = routesFilter?.destination;

  const availableShuttles = useTravelRoutes(
    departure as string,
    destination as string,
    formatDate(departureDate?.toISOString() as string)
  );

  return (
    <div className="flex w-full items-center flex-col gap-8">
      {availableShuttles?.map((shuttle) => (
        <AvailableShuttles
          setBookingModal={setBookingModal}
          from={shuttle.from}
          to={shuttle.destination}
          date={shuttle.travelDate}
          time={shuttle.departureTime}
          seats={shuttle.availableSeats}
          price={shuttle.farePrice}
          busNumber={shuttle.shuttle}
          numberPlate={shuttle.numberPlate}
        />
      ))}
    </div>
  );
}
