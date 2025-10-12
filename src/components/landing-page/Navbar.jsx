import logo from "../../assets/wellness-logo.PNG";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-blue-100 px-4 py-4 md:p-8 border-b-2 border-teal-700 top-0 z-50 w-full">
      <img src={logo} alt="wellness-logo" className="w-32 h-16" />
      <div className="flex flex-col sm:flex-row gap-2">
        <Button text="Sign in" />
        <Button text="Sign up" />
      </div>
    </header>
  );
}
