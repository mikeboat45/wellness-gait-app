import { servicesData } from "../../assets/servicesData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const dataset = servicesData.map((data) => {
    return <ServiceCard key={data.id} {...data} />;
  });

  return (
    <section className="flex flex-col items-center p-8 bg-blue-50">
      <h2 className="pb-8 font-bold text-teal-700 text-4xl">
        Services we offer..
      </h2>
      <div className="grid grid-cols-2 gap-16 gap-x-32">{dataset}</div>
    </section>
  );
}
