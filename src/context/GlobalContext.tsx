import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { State } from '../features/booking/TravelForm';

type GlobalContext = {
  routesFilter: State | null;
  setRoutesFilter: Dispatch<SetStateAction<State | null>>;
  selectedSeatsCount: number;
  setSelectedSeatsCount: Dispatch<SetStateAction<number>>;
  selectedShuttlePath: string;
  setSelectedShuttlePath: Dispatch<SetStateAction<string>>;
  currentUser: string;
  setCurrentUser: Dispatch<SetStateAction<string>>;
  logedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  transportAmount: string;
  setTransportAmount: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  travellingFrom: string;
  setTravellingFrom: Dispatch<SetStateAction<string>>;
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
  selectedShuttle: string;
  setSelectedShuttle: Dispatch<SetStateAction<string>>;
  loginModal: boolean;
  setLoginModal: Dispatch<SetStateAction<boolean>>;
  signupModal: boolean;
  setSignupModal: Dispatch<SetStateAction<boolean>>;
};
export const GlobalContext = createContext<GlobalContext | null>(null);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [routesFilter, setRoutesFilter] = useState<State | null>(null);
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);
  const [selectedShuttlePath, setSelectedShuttlePath] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [logedIn, setLoggedIn] = useState(false);
  const [transportAmount, setTransportAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [travellingFrom, setTravellingFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedShuttle, setSelectedShuttle] = useState('');
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const values = {
    routesFilter,
    setRoutesFilter,
    selectedSeatsCount,
    setSelectedSeatsCount,
    selectedShuttlePath,
    setSelectedShuttlePath,
    currentUser,
    setCurrentUser,
    logedIn,
    setLoggedIn,
    transportAmount,
    setTransportAmount,
    phoneNumber,
    setPhoneNumber,
    travellingFrom,
    setTravellingFrom,
    destination,
    setDestination,
    selectedShuttle,
    setSelectedShuttle,
    loginModal,
    setLoginModal,
    signupModal,
    setSignupModal,
  };

  return <GlobalContext.Provider value={values}> {children}</GlobalContext.Provider>;
};
