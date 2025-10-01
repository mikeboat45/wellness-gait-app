export default function Appointments() {
  return (
    <div className="flex gap-4 w-2/5">
      <div className="border-2 border-teal-800 pb-4 w-1/2 rounded-2xl m-4">
        <h3 className="text-teal-700 px-2 pt-2 pb-1 font-medium">
          Upcoming Appointments
        </h3>
        <hr className="text-teal-700 mx-2" />
      </div>
      <div className="border-2 border-teal-800 pb-4 w-1/2 rounded-2xl m-4">
        <h3 className="text-teal-700 px-2 pt-2 pb-1 font-medium">
          Recent Visits
        </h3>
        <hr className="text-teal-700 mx-2" />
      </div>
    </div>
  );
}
