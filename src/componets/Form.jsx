export default function Form() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE - Form */}
        <form className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Name (required)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Email (required)
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Website
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Message (required)
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
          </div>

          <div className="flex   gap-3">
            <button
              type="reset"
              className="bg-sky-400 text-white px-5 py-2 rounded hover:bg-blue-200 transition"
            >
              Clear Message
            </button>
            <button
              type="submit"
              className="bg-sky-400 text-white px-5 py-2 rounded hover:bg-sky-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Little About Our Company
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Iam nonummy nibh euismod tincidunt ut laoreet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>

          <div className="bg-white shadow-md rounded p-4 space-y-3 border">
            <div>
              <p className="font-medium">📍 Address:</p>
              <p className="text-sm text-gray-700">Celovska cesta 1, Ljub</p>
            </div>
            <div>
              <p className="font-medium">✉️ Email:</p>
              <p className="text-sm text-blue-600">info@premiumcoding.com</p>
            </div>
            <div>
              <p className="font-medium">📞 Phone Number:</p>
              <p className="text-sm text-gray-700">+456 789 854</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
