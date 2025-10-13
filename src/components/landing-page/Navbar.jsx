import logo from "../../assets/wellness-logo.PNG";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-blue-100 px-4 py-4 md:p-8 border-b-2 border-teal-700 top-0 z-50 w-full">
      <img src={logo} alt="wellness-logo" className="w-32 h-16" />
      <div className="flex flex-col sm:flex-row gap-2">
        <Link to="/login" className="bg-teal-800 text-white text-lg px-5 py-2 rounded-xl border-0 hover:bg-teal-900">Sign in</Link>
        <Link to="/signup" className="bg-teal-800 text-white text-lg px-5 py-2 rounded-xl border-0 hover:bg-teal-900">Sign up</Link>
      </div>
    </header>
  );
}
