import { useForm } from "react-hook-form";
import { supabase } from "../../supabaseClient";
import Button from "../landing-page/Button";
import Footer from "../landing-page/Footer";
import logo from "../../assets/wellness-logo.PNG";
import loginImg from "../../assets/login-img.jpg";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) throw error;
      navigate("/dashboard");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <>
      <div
        className="bg-blue-50 flex justify-center items-center min-h-screen py-8 sm:py-16 bg-cover bg-center p-4"
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <div className="flex flex-col justify-around items-center border-2 border-teal-700 p-4 sm:p-8 w-full sm:max-w-md md:w-2/5 bg-blue-50/50 rounded-xl">
          <img src={logo} alt="wellness-logo" className="w-32 h-16" />

          <div>
            <p className="text-base sm:text-xl font-medium text-center">
              Welcome to <span className="text-teal-700">Wellness Gait!</span> -
              Sign in to your account to view appointments.
            </p>
            <hr className="text-white mt-4" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 pt-4"
            >
              <label htmlFor="email">Email</label>
              <input
                id="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full border-2 border-teal-700 rounded-xl py-2 px-1"
                placeholder="e.g. hello@example.com"
              />
              {errors.email && (
                <span className="text-red-500">Please enter a valid email</span>
              )}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="w-full mb-4 border-2 border-teal-700 rounded-xl py-2 px-1"
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
              <Button text="Sign In" type="submit" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
