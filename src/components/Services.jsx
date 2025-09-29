import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="flex flex-col items-center p-8">
      <h2 className="pb-8 font-bold text-teal-700 text-4xl">
        Services we offer..
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <ServiceCard
          title="Deep Massages"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laborum?"
        />
        <ServiceCard
          title="Manual Therapy"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laborum?"
        />
        <ServiceCard
          title="Neurological Rehabilitation"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laborum?"
        />
        <ServiceCard
          title="Sports Rehabilitation"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laborum?"
        />
      </div>
    </section>
  );
}
