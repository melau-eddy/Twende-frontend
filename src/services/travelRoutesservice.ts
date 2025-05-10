import axios, { AxiosError } from 'axios';
import { RouteApiResponse } from '../types/routeTypes';
import { getAccessToken } from '../lib/utils/getAccessToken';

const BASE_URL = 'http://127.0.0.1:3500/north-rift/v1';
type getAllRoutesProps = {
  from?: string;
  destination?: string;
  travelDate?: string;
};

export type AddTravelRoute = {
  from: string;
  destination: string;
  farePrice: number;
  travelDate: string;
  shuttleId: string;
};

export async function getAllRoutes({ from, destination, travelDate }: getAllRoutesProps) {
  try {
    const res = await axios.get<RouteApiResponse>(`${BASE_URL}/path/list`, {
      headers: {
        authorization: getAccessToken(),
      },

      params: {
        from,
        destination,
        travelDate,
      },
    });

    return res.data.paths;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('Error fetching routes');
    }
    throw error;
  }
}

export async function routeById(id: string) {
  try {
    const res = await axios.get<RouteApiResponse>(`${BASE_URL}/path/findById/${id}`, {
      headers: {
        authorization: getAccessToken(),
      },
    });
    return res.data.paths;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error('Error fetching route');
    throw error;
  }
}

export async function addTravelRoute(travelRoute: AddTravelRoute) {
  try {
    await axios.post(`${BASE_URL}/path/create`, travelRoute, {
      headers: {
        authorization: getAccessToken(),
      },
    });

    return;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error('error adding route');
  }
}
