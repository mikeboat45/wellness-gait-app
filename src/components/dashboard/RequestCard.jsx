import { Link } from "react-router-dom";
import Button from "../landing-page/Button";

export default function RequestCard() {
  return (
    <div className="border-2 border-teal-800 rounded-xl shadow-lg p-6">
      <h3 className="font-semibold text-xl mb-2 text-teal-700">
        Request a new service
      </h3>
      <hr className="text-teal-700 mb-2" />
      <p className="text-gray-600 mb-6">
        Need a follow-up consultation or a new therapy session? Let us know how
        we can help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/contact-card">
          <Button text="Email Us" />
        </Link>
        <Link to="/contact-card">
          <Button text="Call Us" />
        </Link>
      </div>
    </div>
  );
}
