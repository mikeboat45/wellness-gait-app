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
      className="bg-teal-700 text-white w-84 h-48 py-8 text-center hover:bg-teal-900"
    >
      <h3 className="text-xl font-bold">{props.title}</h3>
      {isHovered && <p className="p-4 text-lg">{props.text}</p>}
    </div>
  );
}
