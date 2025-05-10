import adobeLogo from '../../assets/adobe-pdf-icon-logo-svgrepo-com (2).svg';
import PaymentReceipt from './paymentPdf';

type BookingTableProps = {
  data: Array<{ travelDate: string; customerName: string; customerPhoneNumber: string; ticketAmount: string }>;
};

export default function BookingsTable({ data }: BookingTableProps) {
  return (
    <div className="flex flex-col w-1/2">
      <img
        src={adobeLogo}
        alt="Adobe logo"
        className=" w-10 mt-10 self-end me-5 cursor-pointer"
        onClick={() => PaymentReceipt(data)}
      />
      <div className="w-full bg-white mt-4 rounded-lg shadow-md min-h-[400px] p-6">
        <table className="w-full text-gray-700">
          <thead className=" text-left border-y">
            <tr>
              <th className=" py-2">Payment Date</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Ticket Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="py-2">{row.travelDate}</td>
                <td>{row.customerName}</td>
                <td>{row.customerPhoneNumber}</td>
                <td>{row.ticketAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
