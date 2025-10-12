import { useState } from "react";

export default function ServiceCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const showOnHover = () => {
    setIsHovered(true);
  };

  const clearOnHover = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={showOnHover}
      onMouseLeave={clearOnHover}
      className="bg-teal-700 text-white w-full h-48 py-4 sm:py-8 text-center hover:bg-teal-900 hover:shadow-teal-800 rounded shadow-md shadow-teal-600"
    >
      <h3 className="text-lg sm:text-xl font-bold">{props.title}</h3>
      {isHovered && <p className="p-2 sm:p-4 text-base sm:text-lg">{props.text}</p>}
    </div>
  );
}
