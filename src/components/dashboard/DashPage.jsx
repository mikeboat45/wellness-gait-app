import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import Footer from "../landing-page/Footer";
import Navbar from "./DashNav";
import RequestCard from "./RequestCard";
import Appointments from "./Appointments";
import VidRes from "./VideoResources";
import BlogRes from "./BlogResources";
import { resourceBlogData } from "../../assets/data";
import { resourceVideoData } from "../../assets/data";
import ProfileOverview from "./ProfileOverview";

export default function DashPage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("first_name, last_name")
          .eq("id", user.id)
          .single();

        if (error) {
          console.warn(error);
        } else if (data) {
          setProfile(data);
        }
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const resourceInfo = resourceVideoData.map((resource) => {
    return (
      <div key={resource.id} className="flex-shrink-0 w-72">
        <VidRes {...resource} />
      </div>
    );
  });

  const resourceDetails = resourceBlogData.map((resource) => {
    return (
      <div key={resource.id} className="flex-shrink-0 w-72">
        <BlogRes {...resource} />
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-blue-50">
        <h1 className="font-medium text-center text-2xl p-4">
          Welcome back,{" "}
          <span className="text-teal-700">{profile?.first_name || ""}!</span>
        </h1>
        <div className="px-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/3 px-2 mb-4">
              <RequestCard />
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4">
              <Appointments />
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4">
              <ProfileOverview profile={profile} loading={loading} />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-teal-700 px-4 pt-2 pb-1 font-semibold text-2xl text-center">
            Resources
          </h2>
          <h3 className="text-teal-700 px-4 pt-2 pb-1 font-medium text-xl text-center">
            Videos
          </h3>
          <div className="flex overflow-x-auto gap-4 px-4 pt-4 pb-6">
            {resourceInfo}
          </div>
          <h3 className="text-teal-700 px-4 pt-2 pb-1 font-medium text-xl text-center">
            Blog Articles
          </h3>
          <div className="flex overflow-x-auto gap-4 px-4 py-6">
            {resourceDetails}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
