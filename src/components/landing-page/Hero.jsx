import Button from "./Button";
import bgImage from "../../assets/gait-app-bg.jpg";

export default function Hero() {
  return (
    <section className="bg-cover bg-center">
      <div
        className="flex flex-col items-center py-70 bg-blue-50 bg-cover bg-center w-full h-screen "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="text-4xl font-bold">Move Freely, Live Fully</h2>
        <p className="italic text-xl py-1">
          Your journey to recovery starts with us!
        </p>
        <div className="pt-20">
          <Button text="Book an Appointment" />
        </div>
      </div>
    </section>
  );
}
