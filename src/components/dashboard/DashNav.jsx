import logo from "../../assets/wellness-logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBars,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function DashNav() {
  return (
    <header className="flex justify-between items-center bg-blue-100 p-8 border-b-2 border-teal-700 top-0 z-50 w-full">
      <div>
        <img src={logo} alt="wellness-logo" className="w-32 h-16" />
      </div>

      <div className="">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-teal-700 hover:text-teal-900 text-2xl mx-2"
        />
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-teal-700 hover:text-teal-900 text-2xl mx-2"
        />
        <FontAwesomeIcon
          icon={faBars}
          className="text-teal-700 hover:text-teal-900 text-2xl mx-2"
        />
      </div>
    </header>
  );
}
