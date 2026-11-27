import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-xl shadow-lg text-center">

        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          User Details
        </h1>

        <p className="text-lg text-gray-700">
          User ID: {id}
        </p>

      </div>

    </div>
  );
}

export default UserDetails;