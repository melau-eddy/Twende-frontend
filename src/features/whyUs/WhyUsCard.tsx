type WhyUsCardProps = {
  imageSrc: string;
  heading: string;
  description: string;
};
export default function WhyUsCard({ imageSrc, heading, description }: WhyUsCardProps) {
  return (
    <div className=" bg-sky-100 w-72 p-3 rounded-xl h-80 flex flex-col items-center py-10 gap-10 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img src={imageSrc} alt={imageSrc} width={95} height={69} />
      <div className="flex flex-col gap-4">
        <h1 className=" text-sky-600 text-lg font-semibold tracking-wide">{heading}</h1>
        <p className=" text-gray-500 text-wrap text-sm tracking-wide">{description}</p>
      </div>
    </div>
  );
}
