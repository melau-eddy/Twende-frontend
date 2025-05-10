export type TravelRoute = {
  _id: string;
  from: string;
  destination: string;
  travelDate: string;
  departureTime: string;
  availableSeats: number;
  shuttle: string;
  farePrice: string;
  isActive: boolean;
  numberPlate: string;
  __v: number;
};

export type RouteApiResponse = {
  status: number;
  paths: Array<TravelRoute>;
};
