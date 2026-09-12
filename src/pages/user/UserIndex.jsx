import UsersList from "../../components/UsersList";
import Loading from "../../components/Loading";
import useGet from "../../components/hooks/fetch/useGet";

function UserIndex() {
  const {
    data: users,
    loading,
    error,
  } = useGet("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Users:</h1>
      {loading && <Loading />}
      {error && <p className="text-red-500">{error.message}</p>}

      <UsersList users={users} />
    </div>
  );
}
export default UserIndex;
