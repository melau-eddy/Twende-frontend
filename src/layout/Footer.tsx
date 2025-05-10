export default function Footer() {
  return (
    <footer className="w-full bg-zinc-800 mt-32 h-60 flex items-center justify-center">
      <div className="text-white text-sm flex flex-row items-center justify-around gap-20 h-full w-full px-48">
        <div className="flex flex-col w-[240px] items-center justify-center">
          <h1 className="border-b-4 border-cyan-700 mb-3">About Us</h1>
          <p>A leading travelling company connecting Rift Valley to the rest of Kenya</p>
        </div>

        <div className="flex flex-col items-center w-[240px]">
          <h1 className="border-b-4 border-cyan-700 mb-3 w-fit">Contact us</h1>
          <p className="flex flex-col">
            <span>+ 254 727 533 551</span>
            <span>+ 254 727 533 551</span>
          </p>
        </div>

        <div className=" flex flex-col items-center w-[240px]">
          <h1 className="border-b-4 border-cyan-700 mb-3 w-fit">Our Offices</h1>
          <p className=" flex flex-col">
            <span>Mfangano Street, Nairobi</span>
            <span>Koitalel Avenue, Eldoret</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
