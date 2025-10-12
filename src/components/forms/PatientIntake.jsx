{
  /*from book appointment button */
}

import formBgImg from "../../assets/intake-form-bg.jpg";
import Button from "../landing-page/Button";

export default function PatientIntakeForm() {
  return (
    <div
      className="bg-cover bg-center flex justify-center items-center w-full h-screen p-4 sm:p-8"
      style={{ backgroundImage: `url(${formBgImg})` }}
    >
      <div className="bg-teal-700/30 text-black w-full sm:max-w-md md:w-1/2 max-h-full rounded-xl overflow-y-auto">
        <form action="" className="flex flex-col gap-4 p-4 sm:p-6">
          <h2 className="font-semibold text-black text-lg sm:text-xl">
            Request an appointment
          </h2>
          <label htmlFor="full-name">Full Name: </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-black/70 h-10 text-white rounded-md pl-2"
            placeholder="Jay Mayors"
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-black/70 h-10 text-white rounded-md pl-2"
            placeholder="jay.may45@gmail.com"
          />
          <label htmlFor="complaint">Complaint: </label>
          <input
            type="text"
            id="complaint"
            name="complaint"
            placeholder="e.g. Knee pain for the past two days"
            required
            className="w-full bg-black/70 h-10 text-white rounded-md pl-2 "
          />
          <label htmlFor="history">Describe your problem</label>
          <textarea
            name="history"
            id="history"
            placeholder="Write a full description of your complaint..."
            className="w-full bg-black/70 h-24 text-white rounded-md pl-2"
          ></textarea>
          <div className="flex items-start ">
            <input type="checkbox" name="t&c" id="t&c" />
            <label htmlFor="consent" className="text-xs sm:text-sm italic">
              By submitting this request, I confirm that the information
              provided is accurate to the best of my knowledge and I consent to
              be contacted by The Wellness Gait Center to discuss my physical
              therapy needs and schedule an appointment.
              <span className="text-red-700 font-bold">*</span>
            </label>
          </div>
          <Button text="Submit" /> {/* to signup form */}
        </form>
      </div>
    </div>
  );
}
