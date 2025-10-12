import { servicesData } from "../../assets/data.js";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const dataset = servicesData.map((dataObject) => {
    return <ServiceCard key={dataObject.id} {...dataObject} />;
  });

  return (
    <section className="flex flex-col items-center p-4 sm:p-8 bg-blue-50">
      <h2 className="pb-4 sm:pb-8 font-bold text-teal-700 text-2xl sm:text-3xl md:text-4xl text-center px-4">
        Services we offer..
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-16 px-4">
        {dataset}
      </div>
    </section>
  );
}
