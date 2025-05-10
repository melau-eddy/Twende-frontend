import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useMutation } from '@tanstack/react-query';
import { initiatePayment } from '../../services/paymentService';
import { toast } from 'react-toastify';

type BookingConfirmationProps = {
  setDowloadTicket: Dispatch<SetStateAction<boolean>>;
};

export default function BookingConfirmation({ setDowloadTicket }: BookingConfirmationProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const globalContaxt = useContext(GlobalContext);
  const selectedSeatCount = globalContaxt?.selectedSeatsCount;
  const ticketPrice = globalContaxt?.transportAmount;
  const selectedShuttle = globalContaxt?.selectedShuttle;
  const amount = Number(ticketPrice) * Number(selectedSeatCount);

  const date = new Date();
  const formattedDate = date.toISOString().slice(0, 10);

  const paymentBody = {
    phone: phoneNumber,
    customerName,
    amount,
    shuttleNumber: selectedShuttle,
    bookingDate: formattedDate,
  };

  useEffect(() => {
    const customerName = localStorage.getItem('fullName');
    setCustomerName(customerName ?? '');
  }, []);

  const {
    mutate: paymentInitiation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: initiatePayment,
    onSuccess: (data) => {
      toast.success(data.message);
      setDowloadTicket(true);
    },
    onError: (error) => toast.error(error.message),
  });

  const handleSubmit = () => {
    paymentInitiation(paymentBody);
  };

  return (
    <div className="flex flex-col gap-5 p-3 border border-gray-200 rounded-lg">
      <p className="text-base font-semibold">
        Selected Seats : <span>{selectedSeatCount}</span>
      </p>

      <div className="flex flex-col gap-3">
        <InputField label="Total Amount" type="number" id="totalAmount" value={amount} readOnly></InputField>
        <InputField label={'Passenger Name'} type={'text'} id={'passengerName'} value={customerName ?? ''} />
        <InputField
          label="Phone Number"
          type="tel"
          id="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e);
            globalContaxt?.setPhoneNumber(e);
          }}
        />
      </div>

      <Button type="primary" onClick={() => handleSubmit()}>
        {isPending ? 'initiating ...' : isSuccess ? 'initiated' : 'Initiate Payment'}
      </Button>
    </div>
  );
}
