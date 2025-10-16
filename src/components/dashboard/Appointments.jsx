import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

export default function Appointments() {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [recentVisits, setRecentVisits] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from("service_requests")
          .select("service, status, created_at")
          .eq("user_id", user.id);

        if (error) {
          console.error("Error fetching appointments:", error);
        } else {
          const pending = data.filter((appt) => appt.status === "pending");
          const completed = data.filter((appt) => appt.status !== "pending");
          setUpcomingAppointments(pending);
          setRecentVisits(completed);
        }
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="border-2 border-teal-800 pb-4 w-full md:w-1/2 rounded-2xl">
        <h3 className="text-teal-700 px-2 pt-2 pb-1 font-medium">
          Upcoming Appointments
        </h3>
        <hr className="text-teal-700 mx-2" />
        {upcomingAppointments.length > 0 ? (
          <ul>
            {upcomingAppointments.map((appt) => (
              <li key={appt.created_at} className="px-2 py-1">
                {appt.service} - <span className="italic">{appt.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-2 py-1">No upcoming appointments.</p>
        )}
      </div>
      <div className="border-2 border-teal-800 pb-4 w-full md:w-1/2 rounded-2xl">
        <h3 className="text-teal-700 px-2 pt-2 pb-1 font-medium">
          Recent Visits
        </h3>
        <hr className="text-teal-700 mx-2" />
        {recentVisits.length > 0 ? (
          <ul>
            {recentVisits.map((appt) => (
              <li key={appt.created_at} className="px-2 py-1">
                {appt.service} - <span className="italic">{appt.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-2 py-1">No recent visits.</p>
        )}
      </div>
    </div>
  );
}
