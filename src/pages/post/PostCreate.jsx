function PostCreate({
  isModalOpen,
  setIsModalOpen,
  inputTitle,
  setInputTitle,
  inputBody,
  setInputBody,
  handleAddPost,
}) {
  return (
    <>
      <div
        tabIndex="-1"
        aria-hidden={!isModalOpen}
        className={`${
          isModalOpen ? "flex" : "hidden"
        } fixed inset-0 z-50 justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-xl shadow-2xl">
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 rounded-t">
              <h3 className="text-lg font-semibold text-gray-800">
                Create new post
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form action="#" className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition-all"
                    placeholder="Type post title"
                    value={inputTitle}
                    onChange={(e) => {
                      setInputTitle(e.target.value);
                    }}
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Post Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Write product description here"
                    required
                    value={inputBody}
                    onChange={(e) => {
                      setInputBody(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              {/* فوتر و دکمه‌های تایید/انصراف */}
              <div className="flex items-center space-x-3 mt-6 border-t border-gray-100 pt-4">
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    if (inputBody.trim() && inputTitle.trim()) {
                      handleAddPost();
                      setIsModalOpen(false);
                    }
                  }}
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add new post
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-700 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCreate;
