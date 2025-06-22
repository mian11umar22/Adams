import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="bg-sky-400 text-white text-sm py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
        {/* Left Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span className="whitespace-nowrap">+92-3026589335</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span className="whitespace-nowrap">info@waseem.arhamsoft.org</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaClock />
            <span className="whitespace-nowrap">Mon–Fri: 10 to 7</span>
          </div>
        </div>

        {/* Right Auth Links */}
        <div className="flex items-center space-x-3 text-sm">
          <a href="#" className="hover:underline">
            Sign in / Register
          </a>
          <a href="#" className="hover:underline">
            Your Cart (0)
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 md:px-8 py-4 space-y-2 sm:space-y-0">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          ADA<span className="text-sky-400">MAS</span>
        </h1>

        {/* Nav Links */}
        <nav className="flex flex-wrap space-x-3 text-sm text-gray-700 font-medium">
          <Link to="/" className="hover:text-sky-400">{`Home >>`}</Link>
          <Link
            to="/message"
            className="hover:text-sky-400"
          >{`Message >>`}</Link>
          <Link
            to="/category"
            className="hover:text-sky-400"
          >{`Category >>`}</Link>
        </nav>
      </div>
    </header>
  );
}
