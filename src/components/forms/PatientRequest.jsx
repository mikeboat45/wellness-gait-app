import formBgImg from "../../assets/intake-form-bg.jpg";
import Button from "../landing-page/Button";

export default function PatientRequest() {
  return (
    <div
      className="bg-cover bg-center flex justify-center items-center w-full h-screen"
      style={{ backgroundImage: `url(${formBgImg})` }}
    >
      <div className="bg-teal-700/30 text-white w-1/2 h-3.5/4 max-h-4/4 rounded-xl ">
        <form action="" className="flex flex-col gap-4 p-4">
          <h2 className="font-semibold text-black text-xl">
            Make an appointment
          </h2>
          <label htmlFor="complaint">Complaint: </label>
          <input
            type="text"
            id="complaint"
            name="complaint"
            placeholder="e.g. Knee pain for the past two days"
            required
            className="bg-black/70 h-10 text-white rounded-md pl-2 "
          />
          <label htmlFor="history">Describe your problem</label>
          <textarea
            name="history"
            id="history"
            placeholder="Write a full description of your complaint..."
            className="bg-black/70 h-24 text-white rounded-md pl-2"
          ></textarea>
          <label htmlFor="service-select">Select Service</label>
          <select
            name="service-select"
            id="service-select"
            className="bg-black/70 h-10 text-white rounded-md pl-2 "
          >
            <option value="default">--Select a service--</option>
            <option value="deep massages">Deep Massages</option>
            <option value="manual therapy">Manual Therapy</option>
            <option value="neuro-rehab">Neurological Rehabilitation</option>
            <option value="sports-rehab">Sports Rehabilitation</option>
            <option value="other">Other service</option>
          </select>
          <label htmlFor="insurance-select">
            Select your insurance provider
          </label>
          <select
            name="insurance-select"
            id="insurance-select"
            className="bg-black/70 h-10 text-white rounded-md pl-2 "
          >
            <option value="default">--Select your insurance company--</option>
            <option value="nhis">National Health Insurance</option>
            <option value="enterprise">Enterprise Insurance</option>
            <option value="vanguard">Vanguard Insurance</option>
            <option value="glico">Glico Insurance</option>
          </select>
          <Button text="Submit" /> {/* to dashboard */}
        </form>
      </div>
    </div>
  );
}
