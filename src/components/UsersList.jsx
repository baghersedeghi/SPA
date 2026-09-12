function UsersList({ users }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users?.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="bg-indigo-50 px-5 py-4 border-b border-gray-200">
              <h2
                onClick={() => (window.location.href = `/users/${user.id}`)}
                className="text-xl font-bold text-indigo-600 cursor-pointer hover:text-indigo-800 hover:underline transition-colors"
              >
                {user.name}
              </h2>
            </div>

            <div className="p-5 space-y-3">
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Username:</span>{" "}
                {user.username}
              </p>

              <p className="text-gray-700 break-all">
                <span className="font-semibold text-gray-900">Email:</span>{" "}
                {user.email}
              </p>

              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                {user.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default UsersList;
