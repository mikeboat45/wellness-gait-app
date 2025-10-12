import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function RequestCard() {
  return (
    <div className="border-2 border-teal-800 pb-4 w-full lg:w-1/5 rounded-2xl">
      <div className="border-2 border-teal-800 bg-teal-800  py-16 text-center rounded-xl mb-6 text-2xl text-white font-medium">
        REQUEST a service
      </div>
      <div className="flex justify-around items-center">
        <button className="px-4 py-2 border-2 text-teal-800 font-medium border-teal-800 rounded-xl hover:bg-teal-800 hover:text-white">
          <FontAwesomeIcon icon={faPhone} /> Call Now
        </button>
        <button className="px-4 py-2 border-2 text-teal-800 font-medium border-teal-800 rounded-xl hover:bg-teal-800 hover:text-white">
          <FontAwesomeIcon icon={faEnvelope} /> Send Email
        </button>
      </div>
    </div>
  );
}
