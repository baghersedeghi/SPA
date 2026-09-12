import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import PostEdit from "./PostEdit";

function PostShow() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditMode, setEditMode] = useState();
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        const post = await res.json();
        setPost(post);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);
  // const handleEditPost = () => {

  // };
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
        Post Details
      </h1>

      {loading && <Loading />}

      {error && (
        <p className="bg-red-100 text-red-700 border border-red-300 rounded-lg p-3">
          Error: {error.message}
        </p>
      )}

      {post && (
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {post.title}
          </h2>

          <p className="text-gray-600 leading-7 mb-6">{post.body}</p>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium transition duration-200 hover:bg-red-600 active:scale-95">
              Delete
            </button>

            <button
              onClick={() => setEditMode(true)}
              className="px-5 py-2 rounded-lg bg-blue-500 text-white font-medium transition duration-200 hover:bg-blue-600 active:scale-95"
            >
              Edit
            </button>
            {post && (
              <PostEdit
                isEditMode={isEditMode}
                setEditMode={setEditMode}
                post={post}
                setPost={setPost}
                // handleAddPost={handleAddPost}
              ></PostEdit>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default PostShow;
