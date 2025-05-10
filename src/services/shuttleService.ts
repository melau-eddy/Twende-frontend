import axios, { AxiosError } from 'axios';
import { getAccessToken } from '../lib/utils/getAccessToken';

const BASE_URL = 'http://127.0.0.1:3500/north-rift/v1';

type Shuttle = {
  _id: string;
  numberPlate: string;
  driver: string;
  status: string;
  __v: number;
};

type ShuttleApiResponse = {
  status: 10001;
  data: Array<Shuttle>;
};

type ApiError = {
  status: 10002;
  message: string;
};

export async function getshuttles() {
  try {
    const res = await axios.get<ShuttleApiResponse | ApiError>(`${BASE_URL}/shuttle/list`, {
      headers: {
        authorization: getAccessToken(),
      },
    });

    if (res.data.status !== 10001) throw new Error(res.data.message);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('Error fetching shuttles');
    }
    throw error;
  }
}
