import Button from "../landing-page/Button";
import Footer from "../landing-page/Footer";
import logo from "../../assets/wellness-logo.PNG";
import loginImg from "../../assets/login-img.jpg";

export default function LoginForm() {
  return (
    <>
      <div
        className="bg-blue-50 flex justify-around h-160 bg-cover bg-center "
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <div className="flex flex-col justify-around items-center border-2 border-teal-700 p-8 m-4 w-2/5 bg-blue-50/50 rounded-xl">
          <img src={logo} alt="wellness-logo" className="w-32 h-16" />

          <div>
            <p className="text-xl font-medium text-center">
              Welcome to <span className="text-teal-700">Wellness Gait!</span> -
              Sign in to your account to view appointments.
            </p>
            <hr className="text-white mt-4" />
            <form action="" className="flex flex-col gap-2 pt-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className=" border-2 border-teal-700 rounded-xl py-2 px-1"
                required
                placeholder="e.g. hello@example.com"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
                className="mb-4 border-2 border-teal-700 rounded-xl py-2 px-1"
              />
            </form>
          </div>
          <Button text="Sign In" />
        </div>
      </div>
      <Footer />
    </>
  );
}
