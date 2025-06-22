export default function HeaderBanner() {
  return (
    <div className="bg-[url('/images/slider-bg.jpg')] bg-cover bg-center min-h-[400px] flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-8 space-y-6 md:space-y-0">
      {/* Left: Ring Image */}
      <div className="flex-shrink-0">
        <img
          src="/images/slider-content-img.jpg"
          alt="Rings"
          className="w-[300px] md:w-[420px] max-w-full mx-auto"
        />
      </div>

      {/* Right: Text Section */}
      <div className="md:ml-10 text-center md:text-left text-gray-800 space-y-3 max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold inline-block px-4 py-2 bg-sky-400 text-white">
          RINGS ON SALE
        </h2>
        <p className="text-sm leading-relaxed px-2 md:px-0">
          Lorem ipsum dolor sit amet, consecte adipiscing elit. Fusce at justo
          eget lorem porttitor tincidunt.
        </p>
        <button className="bg-sky-400 text-white px-5 py-2 rounded hover:bg-sky-500 transition">
          Visit Store
        </button>
      </div>
    </div>
  );
}
