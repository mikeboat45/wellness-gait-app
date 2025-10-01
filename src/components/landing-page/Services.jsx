import { data } from "../../assets/data.js";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const dataset = data.map((dataObject) => {
    return <ServiceCard key={dataObject.id} {...dataObject} />;
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
