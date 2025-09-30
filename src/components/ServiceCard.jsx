import { useState } from "react";

export default function ServiceCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [details, setDetails] = useState(null);

  const showOnHover = () => {
    setIsHovered(true);
    setDetails("lorem sdsmsds serem ses sdfe");
  };

  const clearOnHover = () => {
    setIsHovered(false);
    setDetails(null);
  };

  return (
    <div
      onMouseEnter={showOnHover}
      onMouseLeave={clearOnHover}
      className="bg-teal-700 text-white group w-72 h-36 py-8 text-center"
    >
      <h3 className="text-xl">{props.title}</h3>
      {setIsHovered && <p>{setDetails}</p>}
    </div>
  );
}
