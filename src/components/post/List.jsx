import { Link } from "react-router";
function PostList({ posts }) {

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h2
              className="cursor-pointer rounded-t-xl bg-gray-50 px-5 py-4 text-lg font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
            >
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>

            <div className="p-5">
              <p className="text-gray-600 leading-7 line-clamp-4">
                {post.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default PostList;
