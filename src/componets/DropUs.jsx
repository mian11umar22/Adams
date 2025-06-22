import { MdPhoneIphone } from "react-icons/md";

export default function DropUs() {
  return (
    <div className="bg-sky-400 text-white px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col space-y-1 text-center md:text-left">
          <span className="text-lg font-semibold">
            Shop with a Sidebar On Left
          </span>
          <span className="text-sm">
            <button className="underline">Home {">>"}</button> Shop with a
            sidebar
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
          <MdPhoneIphone size={36} className="mx-auto sm:mx-0" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-black text-lg whitespace-nowrap">
              +565 975 658
            </span>
            <span className="text-sm whitespace-nowrap">
              Monday - Friday, 8.00–20.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
