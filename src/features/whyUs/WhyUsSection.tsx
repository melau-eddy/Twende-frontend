import WhyUsCard from './WhyUsCard';
import SeatsSvg from '../../assets/seats.svg';
import PaymentSvg from '../../assets/payment.svg';
import RouteSvg from '../../assets/route.svg';

export default function WhyUsSection() {
  return (
    <div className="px-10 mb-5 flex flex-col gap-5">
      <h1 className="font-bold text-2xl">
        Why <span className="text-red-400">Choose</span> Us ?
      </h1>

      <div className="flex fex-row w-full justify-center gap-32 items-center">
        <WhyUsCard
          imageSrc={SeatsSvg}
          heading="Express Journey"
          description=" Our services are fast and reliable, ensuring you reach your destination on time"
        />
        <WhyUsCard
          imageSrc={PaymentSvg}
          heading="Flexible Payment"
          description="Pay conveniently via M-pesa or mobile banking options"
        />
        <WhyUsCard
          imageSrc={RouteSvg}
          heading="Extensive Route"
          description="We are well equipesd with an large commuter network."
        />
      </div>
    </div>
  );
}
