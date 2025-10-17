import bgImage from "../../assets/gait-app-bg.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-cover bg-center">
      <div
        className="flex flex-col items-center py-10 sm:py-20 md:py-32 lg:py-48 xl:py-70 bg-blue-50 bg-cover bg-center w-full h-[60vh] md:h-screen "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center px-4">
          Move Freely, Live Fully
        </h2>
        <p className="italic text-xl sm:text-2xl py-1 text-center px-4">
          Your journey to recovery starts with us!
        </p>
        <div className="pt-4 sm:pt-8 md:pt-16">
          <Link
            to="/book-appointment"
            className="bg-teal-800 text-white text-2xl px-6 py-3 rounded-xl border-0 hover:bg-teal-900"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
