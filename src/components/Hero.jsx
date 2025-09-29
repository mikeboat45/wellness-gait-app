import Button from "./Button";

export default function Hero() {
  return (
    <section className="py-0.5">
      <div className="flex flex-col items-center py-30 bg-blue-50">
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
