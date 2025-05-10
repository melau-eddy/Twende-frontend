import axios, { AxiosError } from 'axios';
import { PaymentApiResponse } from '../types/paymentTypes';

const BASE_URL = 'http://127.0.0.1:3500/north-rift/v1';

export type ApiError = {
  status: 10002;
  message: string;
};

export type PaymentBody = {
  customerName: string;
  amount: number;
  phone: string;
  shuttleNumber: string | undefined;
  bookingDate: string;
};

export async function initiatePayment(paymentBody: PaymentBody) {
  try {
    const res = await axios.post<{ status: number; message: string }>(`${BASE_URL}/payment/stkPush`, paymentBody);
    if (res.data.status !== 10001) {
      throw new Error(res.data.message);
    }

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('Error initiating payment, try again');
    }
    throw error;
  }
}

export async function getPayments({ date, shuttleId }: { date: string; shuttleId: string }) {
  try {
    const res = await axios.get<PaymentApiResponse | ApiError>(`${BASE_URL}/payment/payments`, {
      params: {
        date: date,
        shuttleId: shuttleId,
      },
    });
    if (res.data.status !== 10001) throw new Error(res.data.message);

    return res.data as PaymentApiResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('Trouble loading payments data, please try again later');
    }
    throw error;
  }
}
