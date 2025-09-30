import logo from "../../assets/wellness-logo.PNG";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-blue-100 p-8 border-b-2 border-teal-700">
      <img src={logo} alt="wellness-logo" className="w-32 h-16" />
      <Button text="Sign in" />
      <Button text="Sign up" />
    </header>
  );
}
