export default function Login() {
  return (
    <div className="w-full max-w-3xl flex rounded-lg overflow-hidden">
      {/* Left Side - Welcome Panel */}
      <div className="hidden md:flex flex-col justify-center  bg-gray-200 px-8 py-10 w-1/2">
        <h2 className="text-2xl font-bold mb-2">
          Welcome Back to <span>ADAMAS</span>
        </h2>
        <p className="text-sm">
          Log in to access your dashboard, manage your settings, and explore new
          features tailored to you.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-white px-6 py-8">
        <h3 className="text-xl text-center text-sky-500 font-bold mb-6">
          Login
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-sky-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-sky-400"
              placeholder="********"
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
