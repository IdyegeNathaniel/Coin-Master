import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-500 h-96 flex flex-col justify-center items-center text-center">
      <FaSearch className="text-6xl text-yellow-400 mb-4" />
      <h2 className="font-semibold text-2xl md:text-4xl text-white mb-4">
        Page Not Found
      </h2>
      <Link
        to="/"
        className="bg-yellow-400 text-slate700 font-bold px-4 py-2 mt-4 rounded-md"
      >
        Return to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
