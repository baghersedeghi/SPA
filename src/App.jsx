import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import UserIndex from "./pages/user/UserIndex";
import UserShow from "./pages/user/UserShow";
import PostIndex from "./pages/post/PostIndex";
import PostShow from "./pages/post/PostShow";
// import PostCreate from "./pages/post/PostCreate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserIndex />} />
          <Route path="/users/:id" element={<UserShow />} />
          <Route path="/posts" element={<PostIndex />} />
          <Route path="/posts/:id" element={<PostShow />} />
          {/* <Route path="/posts/create" element={<PostCreate />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
