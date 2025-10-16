import { useForm } from "react-hook-form";
import formBgImg from "../../assets/intake-form-bg.jpg";
import Button from "../landing-page/Button";
import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function PatientRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { error } = await supabase.from("service_requests").insert([
        {
          complaint: data.complaint,
          history: data.history,
          service: data.service,
          insurance: data.insurance,
          user_id: user.id,
        },
      ]);
      if (error) throw error;
      setIsSubmitted(true);
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <div
      className="bg-cover bg-center flex justify-center items-center w-full h-screen p-4 sm:p-8"
      style={{ backgroundImage: `url(${formBgImg})` }}
    >
      <div className="bg-teal-700/30 text-white w-full sm:max-w-md md:w-1/2 max-h-full rounded-xl ">
        {isSubmitted ? (
          <div className="p-6 text-center">
            <h2 className="font-semibold text-black text-lg sm:text-xl">
              Thank you!
            </h2>
            <p>Your request has been submitted. We will contact you shortly.</p>
            <Button text="Back to Dashboard" onClick={() => navigate("/dashboard")} />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-4 sm:p-6"
          >
            <h2 className="font-semibold text-black text-lg sm:text-xl">
              Make an appointment
            </h2>
            <label htmlFor="complaint">Complaint: </label>
            <input
              id="complaint"
              {...register("complaint", { required: true })}
              placeholder="e.g. Knee pain for the past two days"
              className="w-full bg-black/70 h-10 text-white rounded-md pl-2 "
            />
            {errors.complaint && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="history">Describe your problem</label>
            <textarea
              id="history"
              {...register("history", { required: true })}
              placeholder="Write a full description of your complaint..."
              className="w-full bg-black/70 h-24 text-white rounded-md pl-2"
            ></textarea>
            {errors.history && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="service-select">Select Service</label>
            <select
              id="service-select"
              {...register("service", { required: true })}
              className="w-full bg-black/70 h-10 text-white rounded-md pl-2 "
            >
              <option value="">--Select a service--</option>
              <option value="deep massages">Deep Massages</option>
              <option value="manual therapy">Manual Therapy</option>
              <option value="neuro-rehab">Neurological Rehabilitation</option>
              <option value="sports-rehab">Sports Rehabilitation</option>
              <option value="other">Other service</option>
            </select>
            {errors.service && (
              <span className="text-red-500">Please select a service</span>
            )}
            <label htmlFor="insurance-select">
              Select your insurance provider
            </label>
            <select
              id="insurance-select"
              {...register("insurance", { required: true })}
              className="w-full bg-black/70 h-10 text-white rounded-md pl-2 "
            >
              <option value="">--Select your insurance company--</option>
              <option value="nhis">National Health Insurance</option>
              <option value="enterprise">Enterprise Insurance</option>
              <option value="vanguard">Vanguard Insurance</option>
              <option value="glico">Glico Insurance</option>
            </select>
            {errors.insurance && (
              <span className="text-red-500">
                Please select an insurance provider
              </span>
            )}
            <div className="flex gap-4">
              <Button text="Back" onClick={() => navigate("/dashboard")} />
              <Button text="Submit" type="submit" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
