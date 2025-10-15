import { useState } from "react";
import { supabase } from "../../supabaseClient";
import Button from "../landing-page/Button";
import Footer from "../landing-page/Footer";
import logo from "../../assets/wellness-logo.PNG";
import signUpImage from "../../assets/sign_in-image.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      navigate("/login?message=Check your email for a verification link.");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <>
      <div
        className="bg-blue-50 flex justify-center items-center min-h-screen py-8 sm:py-16 bg-cover bg-center p-4"
        style={{ backgroundImage: `url(${signUpImage})` }}
      >
        <div className="flex flex-col justify-around items-center border-2 border-teal-700 p-4 sm:p-8 w-full sm:max-w-md md:w-2/5 bg-blue-50/50 rounded-xl">
          <img src={logo} alt="wellness-logo" className="w-32 h-16" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Get Started</h2>
          <p className="text-base sm:text-xl font-medium text-center">
            Welcome to <span className="text-teal-700">Wellness Gait!</span> -
            Let's create your account
          </p>
          <hr className="w-full" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-2 border-teal-700 rounded-xl py-2 px-1"
              required
              placeholder="e.g. hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              className="w-full mb-4 border-2 border-teal-700 rounded-xl py-2 px-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Sign Up" />
          </form>
          <p className="text-center mt-4">
            Already have an account?&nbsp;
            <Link to="/login" className="text-teal-700 font-semibold hover:text-teal-900">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
