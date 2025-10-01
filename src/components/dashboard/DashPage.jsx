import Footer from "../landing-page/Footer";
import Navbar from "./DashNav";
import RequestCard from "./RequestCard";
import Appointments from "./Appointments";
import VidRes from "./VideoResources";
import BlogRes from "./BlogResources";
import { resourceBlogData } from "../../assets/data";
import { resourceVideoData } from "../../assets/data";

export default function DashPage() {
  const resourceInfo = resourceVideoData.map((resource) => {
    return <VidRes key={resource.id} {...resource} />;
  });

  const resourceDetails = resourceBlogData.map((resource) => {
    return <BlogRes key={resource.id} {...resource} />;
  });

  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-blue-50">
        <h1 className="font-medium text-center text-2xl p-4">
          Welcome back, <span className="text-teal-700">Jay Mayors!</span>
        </h1>
        <div>
          <div className="flex gap-4">
            <RequestCard />
            <Appointments />
          </div>
        </div>
        <div>
          <h2 className="text-teal-700 px-4 pt-2 pb-1 font-semibold text-2xl">
            Resources
          </h2>
          <h3 className="text-teal-700 px-4 pt-2 pb-1 font-medium text-xl text-center">
            Videos
          </h3>
          <div className="flex flex-row justify-between px-4 pt-4 pb-6">
            {resourceInfo}
          </div>
          <h3 className="text-teal-700 px-4 pt-2 pb-1 font-medium text-xl text-center">
            Blog Articles
          </h3>
          <div className="flex flex-row justify-between px-4 py-6">
            {resourceDetails}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
