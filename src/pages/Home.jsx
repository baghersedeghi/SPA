import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-3xl text-left mt-10">
          SPA (Single Page Application) App
        </h1>
        <p className=" max-w-2xl">
          This is a simple SPA (Single Page Application) built with React. It
          demonstrates the use of React Router for client-side routing, allowing
          users to navigate between different pages without a full page reload.
          The application is styled using Tailwind CSS and can be further
          customized with SCSS for more advanced styling needs.
        </p>
        <div className="mt-8">
          <Link  to={'/posts'} className="bg-indigo-600 px-6 py-2 cursor-pointer border  border-indigo-700 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-sm">
            Posts
          </Link> 
          <Link to={'/users'}  className="ml-3 px-6 py-2 border border-indigo-700 hover:bg-indigo-700 hover:text-white cursor-pointer  text-indigo-700 font-bold py-2 px-4 rounded-sm">
            Users
          </Link >
        </div>
      </div>
    </>
  );
}

export default Home;
