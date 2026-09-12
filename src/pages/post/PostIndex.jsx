import { useState } from "react";
import Loading from "../../components/Loading";
import PostList from "../../components/post/List";
import PostCreate from "./PostCreate";
import { toast } from "react-toastify";
import useGet from "../../components/hooks/fetch/useGet";

function PostIndex() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");

  const {
    data: posts,
    setData: setPosts,
    loading,
    error,
  } = useGet("https://jsonplaceholder.typicode.com/posts");

  function handleAddPost() {
    if (!inputTitle || !inputBody) return;

    const newPost = { id: Date.now(), title: inputTitle, body: inputBody };

    setPosts([newPost, ...posts]);

    setInputTitle("");
    setInputBody("");
    setIsModalOpen(false);

    toast.success("پست با موفقیت ساخته شد!", {
      autoClose: 3000,
    });
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Posts</h1>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-indigo-600 px-6 py-2 font-semibold text-white shadow hover:bg-indigo-700 transition-all duration-300"
        >
          Create Post
        </button>
      </div>
      <PostCreate
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setPosts={setPosts}
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
        inputBody={inputBody}
        setInputBody={setInputBody}
        handleAddPost={handleAddPost}
      />
      {loading && <Loading />}
      {error && (
        <p className="rounded-lg bg-red-100 p-4 text-red-600">{error}</p>
      )}
      {!loading && !error && <PostList posts={posts} />}
    </div>
  );
}
export default PostIndex;
