import HeroImage from '../assets/heroImage.svg';
import ScheduledDepartures from '../features/booking/ScheduledDepartures';
import TripSelection from '../features/booking/TripSelection';
import TestimonialsSection from '../features/testimonials/TestimonialsSection';
import WhyUsSection from '../features/whyUs/WhyUsSection';
import Footer from '../layout/Footer';

export default function HomePage() {
  return (
    <>
      <main className="">
        <div className="relative text-center">
          <img src={HeroImage} alt="bus image" width={2000} height={500} />
          <div className="absolute z-50 inset-x-0 bottom-0 transform translate-y-10">
            <TripSelection />
          </div>
          <div className=" absolute mt-28 w-full ">
            <div className="flex flex-col justify-center items-center gap-20  ">
              <ScheduledDepartures />

              <WhyUsSection />
              <TestimonialsSection />
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
