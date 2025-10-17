import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ContactCard() {
  const navigate = useNavigate();

  const contactDetails = {
    email: "the-wellness-gait-center@gmail.com",
    phone: "+233 24 123 4567",
    address: "123 Wellness Lane, Osu, Accra, Ghana",
  };

  const socialLinks = [
    { icon: faFacebook, href: "#" },
    { icon: faTwitter, href: "#" },
    { icon: faInstagram, href: "#" },
  ];

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute -top-12 left-0 flex items-center text-teal-700 hover:text-teal-900 font-semibold"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </button>
        <div className="bg-blue-100 rounded-xl shadow-lg shadow-blue-200 p-8">
          <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-teal-700 h-6 w-6 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-gray-600 hover:text-teal-700"
                >
                  {contactDetails.email}
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-teal-700 h-6 w-6 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="text-gray-600 hover:text-teal-700"
                >
                  {contactDetails.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-teal-700 h-6 w-6 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p className="text-gray-600">{contactDetails.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-teal-700"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
