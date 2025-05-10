export type PaymentData = {
  _id: string;
  responseCode: number;
  responseDescription: string;
  customerMessage: string;
  amount: number;
  customerPhoneNumber: string;
  customerName: string;
  shuttleNumber?: string;
  bookingDate?: string;
  __v: number;
};

export type PaymentApiResponse = {
  status: 10001;
  data: PaymentData[];
};
