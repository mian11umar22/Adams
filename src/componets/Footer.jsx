import {
  FaTwitter,
  FaWifi,
  FaPinterestP,
  FaFacebookF,
  FaTwitter as FaTwitterIcon,
  FaFutbol,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-sm text-gray-700">
      {/* Top Social Bar */}
      <div className="bg-gray-200 py-4 px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-start md:items-center space-x-2 flex-1">
          <FaTwitter className="text-sky-500 text-xl mt-1" />
          <span className="text-xs md:text-sm">
            Revenant was just released on <span className="font-medium">#themeforest</span>{" "}
            <a href="http://bit.ly/qoXj6m" className="text-sky-600 hover:underline break-all">
              http://bit.ly/qoXj6m
            </a>
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-6 border-l border-gray-400 mx-4"></div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-3 space-y-2 md:space-y-0 text-gray-700">
          <p className="text-xs md:text-sm">Check the latest news on our Social Networks:</p>
          <div className="flex space-x-2">
            {[FaWifi, FaPinterestP, FaFacebookF, FaTwitterIcon, FaFutbol].map((Icon, i) => (
              <div key={i} className="bg-sky-400 text-white p-2 rounded-full">
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Grid Section */}
      <div className="bg-gray-100 px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">
            ADA<span className="text-sky-400">MAS</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        {/* Recent Products */}
        <div>
          <h3 className="font-semibold mb-3">Recent Products</h3>
          <div className="flex space-x-3 mb-4">
            <img src="/images/details-pic-main.jpg" alt="Blue Sky Diamond" className="w-12 h-12" />
            <div>
              <p className="text-xs">Blue Sky Diamond</p>
              <p className="text-yellow-500 text-xs">★★★★★</p>
              <p className="font-semibold text-sm">$1520.0</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img src="/images/red-ring.jpg" alt="Fiery red Ring" className="w-12 h-12" />
            <div>
              <p className="text-xs">Fiery red Ring</p>
              <p className="text-yellow-500 text-xs">★★★★★</p>
              <p className="font-semibold text-sm">$1520.0</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contacts</h3>
          <p>Adamas d.o.o., 1000 Ljubljana</p>
          <p>Celovska cesta 135</p>
          <p>Slovenia, Europe</p>
          <p className="mt-2">Phone: (+386) 40 123 456</p>
          <p>Mobile: (+386) 40 654 123 651</p>
          <p className="mt-2">Email: info@premiumcoding.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Sign in to Newsletter</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <button className="w-full bg-sky-400 text-white py-2 rounded hover:bg-sky-500 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-xs py-4 px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            SiteMap
          </a>
          <a href="#" className="hover:underline">
            Portfolio
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="text-center">Adamas ©2022 All rights reserved | By Arhamsoft</div>
      </div>
    </footer>
  );
}
