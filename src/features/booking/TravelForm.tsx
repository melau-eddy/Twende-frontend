import { useContext, useReducer } from 'react';
import DropDownSelect from '../../components/DropDownSelect';
import { CiLocationOn } from 'react-icons/ci';
import CustomDatePicker from '../../components/CustomDatepicker';
import Button from '../../components/Button';

import { GlobalContext } from '../../context/GlobalContext';
import useTravelRoutes from '../../lib/hooks/useTravelRoutes';

export type State = {
  departureDate: Date | null;
  departure: string | null;
  destination: string | null;
};

type Action =
  | { type: 'setDepartureDate'; payload: Date | null }
  | { type: 'setDeparture'; payload: string | null }
  | { type: 'setDestination'; payload: string | null };

const initialState = {
  departureDate: null,
  departure: null,
  destination: null,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setDepartureDate':
      return { ...state, departureDate: action.payload };
    case 'setDeparture':
      return { ...state, departure: action.payload };
    case 'setDestination':
      return { ...state, destination: action.payload };
    default:
      throw new Error();
  }
}

export default function TravelForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const globalContext = useContext(GlobalContext);

  const travelRoutes = useTravelRoutes();

  const travellingFrom = travelRoutes?.map((route) => ({
    id: route._id,
    value: route.from,
  }));

  const travellingDestination = travelRoutes?.map((route) => ({
    id: route._id,
    value: route.destination,
  }));

  const handleClick = () => {
    globalContext?.setRoutesFilter(state);
  };

  return (
    <div className="flex flex-row gap-20 bg-white p-4 shadow-md">
      <div>
        <DropDownSelect
          handleSelect={(id) => dispatch({ type: 'setDeparture', payload: id })}
          data={travellingFrom ?? []}
          Icon={CiLocationOn}
          text="Traveling From"
        />
      </div>

      <div>
        <DropDownSelect
          handleSelect={(id) => dispatch({ type: 'setDestination', payload: id })}
          data={travellingDestination ?? []}
          Icon={CiLocationOn}
          text="Destination"
        />
      </div>

      <div>
        <CustomDatePicker
          selectedDate={state.departureDate}
          handleDateChange={(date) => dispatch({ type: 'setDepartureDate', payload: date })}
          text="Departure Date"
        />
      </div>

      <div className="flex items-center">
        <Button type="primary" onClick={handleClick}>
          Find A Car
        </Button>
      </div>
    </div>
  );
}
