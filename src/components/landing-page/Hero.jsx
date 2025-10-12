import Button from "./Button";
import bgImage from "../../assets/gait-app-bg.jpg";

export default function Hero() {
  return (
    <section className="bg-cover bg-center">
      <div
        className="flex flex-col items-center py-10 sm:py-20 md:py-32 lg:py-48 xl:py-70 bg-blue-50 bg-cover bg-center w-full h-[60vh] md:h-screen "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">Move Freely, Live Fully</h2>
        <p className="italic text-lg sm:text-xl py-1 text-center px-4">
          Your journey to recovery starts with us!
        </p>
        <div className="pt-5 sm:pt-10 md:pt-20">
          <Button text="Book an Appointment" />
        </div>
      </div>
    </section>
  );
}
