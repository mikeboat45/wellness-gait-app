import { useForm } from "react-hook-form";
import formBgImg from "../../assets/intake-form-bg.jpg";
import Button from "../landing-page/Button";
import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function PatientIntakeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase.from("appointment_requests").insert([
        {
          full_name: data.fullName,
          email: data.email,
          complaint: data.complaint,
          history: data.history,
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
      <div className="bg-teal-700/30 text-black w-full sm:max-w-md md:w-1/2 max-h-full rounded-xl overflow-y-auto">
        {isSubmitted ? (
          <div className="p-6 text-center">
            <h2 className="font-semibold text-black text-lg sm:text-xl">
              Thank you!
            </h2>
            <p>Your appointment request has been submitted. We will contact you shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-4 sm:p-6"
          >
            <h2 className="font-semibold text-black text-lg sm:text-xl">
              Request an appointment
            </h2>
            <label htmlFor="fullName">Full Name: </label>
            <input
              id="fullName"
              {...register("fullName", { required: true })}
              className="w-full bg-black/70 h-10 text-white rounded-md pl-2"
              placeholder="Jay Mayors"
            />
            {errors.fullName && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full bg-black/70 h-10 text-white rounded-md pl-2"
              placeholder="jay.may45@gmail.com"
            />
            {errors.email && (
              <span className="text-red-500">
                Please enter a valid email address
              </span>
            )}
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
            <div className="flex items-start ">
              <input
                type="checkbox"
                id="consent"
                {...register("consent", { required: true })}
              />
              <label htmlFor="consent" className="text-xs sm:text-sm italic">
                By submitting this request, I confirm that the information
                provided is accurate to the best of my knowledge and I consent
                to be contacted by The Wellness Gait Center to discuss my
                physical therapy needs and schedule an appointment.
                <span className="text-red-700 font-bold">*</span>
              </label>
            </div>
            {errors.consent && (
              <span className="text-red-500">
                You must agree to the terms
              </span>
            )}
            <Button text="Submit" type="submit" />
          </form>
        )}
      </div>
    </div>
  );
}

