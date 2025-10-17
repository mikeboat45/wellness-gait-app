import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-blue-100 shadow-md border-teal-700  items-center pt-4 pb-2 sm:pt-8 justify-between border-t-2 bottom-0  w-full">
      <div className="space-x-2 sm:space-x-6 pb-4">
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-teal-700 hover:text-teal-900 text-xl sm:text-2xl hover:scale-115"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-teal-700 hover:text-teal-900 text-xl sm:text-2xl hover:scale-115"
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="text-teal-700 hover:text-teal-900 text-xl sm:text-2xl hover:scale-115"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-teal-700 hover:text-teal-900 text-xl sm:text-2xl hover:scale-115"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <p className="text-teal-700 text-sm sm:text-base">
          The Wellness Gait Center&trade; Copyright 2025
        </p>
      </div>
    </footer>
  );
}
