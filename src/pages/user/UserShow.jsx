import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";

function UserShow() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(id);
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        if (!res.ok) throw Error("error message");
        const data = await res.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <h1 className=" text-3xl  font-bold text-gray-800 mb-6 border-b pb-3">
        User Details
      </h1>

      {loading && <Loading />}

      {error && (
        <p className="bg-red-100 text-red-700 border border-red-300 rounded-lg p-3">
          {error}
        </p>
      )}

      {user && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {user.name}
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Username</span>
              <span className="text-gray-600">{user.username}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Email</span>
              <span className="text-gray-600 break-all">{user.email}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Phone</span>
              <span className="text-gray-600">{user.phone}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Website</span>
              <span className="text-indigo-600">{user.website}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Company</span>
              <span className="text-gray-600">{user.company?.name}</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium transition hover:bg-red-600 active:scale-95">
              Delete
            </button>

            <button
              className="px-5 py-2 rounded-lg bg-blue-500 text-white font-medium transition hover:bg-blue-600 active:scale-95"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default UserShow;
