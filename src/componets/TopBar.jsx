import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="flex justify-between py-6 px-7 bg-sky-400 text-white">
      <div className="flex flex-col space-y-1">
        <span className="text-lg font-semibold">Shop with a Sidebar On Left</span>
        <span className="text-sm">
          <button>{`Home>>`}</button> Shop with a sidebar
        </span>
      </div>
      <div className="flex space-x-3">
        <span className="font-xl">
          <MdPhoneIphone size={40} />
        </span>
        <div className="flex  items-center flex-col">
          <span className="font-black text-lg">+565 975 658</span>
          <span className="text-sm">Monday - Friday, 8.00-20.00</span>
        </div>
      </div>
    </div>
  );
}
