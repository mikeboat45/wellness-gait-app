import Footer from "../landing-page/Footer";
import Navbar from "./DashNav";
import RequestCard from "./RequestCard";
import Appointments from "./Appointments";

export default function DashPage() {
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
        <div></div>
      </main>
      <Footer />
    </>
  );
}
