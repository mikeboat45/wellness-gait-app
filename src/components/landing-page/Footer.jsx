import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-blue-100 shadow-md border-teal-700  items-center pt-8 pb-2 justify-between border-t-2 fixed bottom-0 z-50 w-full">
      <div className="space-x-6 pb-4">
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-teal-700 hover:text-teal-900"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-teal-700 hover:text-teal-900"
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="text-teal-700 hover:text-teal-900"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-teal-700 hover:text-teal-900"
        />
      </div>
      <p className="text-teal-700 ">
        The Wellness Gait Center&trade; Copyright 2025
      </p>
    </footer>
  );
}
