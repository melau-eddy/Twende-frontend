import { useState } from 'react';
import DropDownSelect from '../../components/DropDownSelect';
import CustomDatePicker from '../../components/CustomDatepicker';
import BookingsTable from './BookingsTable';
import { useQuery } from '@tanstack/react-query';
import { getPayments } from '../../services/paymentService';
import { getshuttles } from '../../services/shuttleService';

export default function BookingResport() {
  const [selectedShuttle, setSelectedShuttle] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = selectedDate.toISOString().slice(0, 10);

  const { data: paymentsObject } = useQuery({
    queryKey: ['paymentData', { formattedDate, selectedShuttle }],
    queryFn: () => getPayments({ date: formattedDate, shuttleId: selectedShuttle }),
  });

  const { data: shuttlesObject } = useQuery({
    queryKey: ['shuttles'],
    queryFn: () => getshuttles(),
  });

  const shuttles = shuttlesObject?.data;
  console.log('shuttles', shuttles);
  const shuttleData = shuttles?.map((shuttle) => ({
    id: shuttle._id,
    value: shuttle.numberPlate,
  }));
  console.log(shuttleData);

  const payments = paymentsObject?.data;
  const paymentsTableData = payments?.map((payment) => ({
    travelDate: payment.bookingDate as string,
    customerName: payment.customerName as string,
    customerPhoneNumber: payment.customerPhoneNumber as string,
    ticketAmount: String(payment.amount),
  }));

  return (
    <div className="px-6">
      <div className=" inline-flex gap-10">
        <DropDownSelect text="Select Shuttle" data={shuttleData ?? []} handleShuttle={(e) => setSelectedShuttle(e)} />
        <CustomDatePicker
          selectedDate={selectedDate}
          handleDateChange={(date) => setSelectedDate(date)}
          text="Travel Date"
        />
      </div>

      <BookingsTable data={paymentsTableData ?? []} />
    </div>
  );
}
