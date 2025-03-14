import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-500">
      <div className="flex flex-col mx-auto py-36 items-center">
        <FaSearch className="text-6xl text-yellow-400 mb-4" />
        <h2 className="font-semibold text-xl md:text-4xl text-white mb-4">
          Page Not Found
        </h2>
        <Link
          to="/"
          className="bg-yellow-400 text-white text-sm font-bold px-4 py-2 mt-4 rounded-md"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
