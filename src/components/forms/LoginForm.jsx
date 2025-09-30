import Button from "../landing-page/Button";
import Footer from "../landing-page/Footer";
import logo from "../../assets/wellness-logo.PNG";
import loginBgImage from "../../assets/login-img.jpg";

export default function LoginForm() {
  return (
    <>
      <div className="bg-blue-50 flex justify-around h-160 ">
        <div className="flex flex-col justify-around items-center border-2 border-teal-700 p-8 m-4 w-2/5">
          <img src={logo} alt="wellness-logo" className="w-32 h-16" />
          <h2 className="text-3xl font-semibold">Get Started</h2>
          <p className="text-xl font-medium">
            Welcome to <span className="text-teal-700">Wellness Gait!</span> -
            Let's create your account
          </p>
          <hr />
          <form action="" className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-84 border-2 border-teal-700 rounded-xl py-2 px-1"
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
          <Button text="Sign Up" />
          <p>
            Already have an account?&nbsp;
            <span className="text-teal-700 font-semibold hover:text-teal-900">
              Login
            </span>
          </p>
        </div>
        <div
          className="bg-cover bg-center p-8 m-4 w-2/5 border-2 border-teal-700"
          style={{ backgroundImage: `url(${loginBgImage})` }}
        >
          {/* <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            eaque.
          </p> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
