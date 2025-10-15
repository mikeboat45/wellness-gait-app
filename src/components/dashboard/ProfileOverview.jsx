export default function ProfileOverview({ profile, loading }) {
  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="p-4 border-2 border-teal-800 rounded-2xl">
      <h2 className="text-xl text-teal-800 font-bold mb-2">Profile</h2>
      <hr className="text-teal-700 mb-2" />
      {profile ? (
        <div>
          <p>
            <strong>First Name:</strong> {profile.first_name || "Not set"}
          </p>
          <p>
            <strong>Last Name:</strong> {profile.last_name || "Not set"}
          </p>
        </div>
      ) : (
        <p>No profile information found.</p>
      )}
    </div>
  );
}
