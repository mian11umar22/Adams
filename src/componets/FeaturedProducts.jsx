import { arrival } from "../Data/LattestArrival";

export default function FeaturedProducts() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <hr className="mb-6" />
      <h1 className="text-center text-2xl font-bold uppercase mb-2">
        Our Featured Products
      </h1>
      <p className="text-center text-sm text-gray-600 mb-10">
        Check our latest offers that just arrived to the store. New Nonummy for
        you to wear.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {arrival.map((item, index) => (
          <div
            key={index}
            className="border shadow-md border-gray-200 p-4 text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-contain mb-4 mx-auto"
            />
            <h2 className="text-sm font-semibold mb-2">{item.title}</h2>
            <p className="text-xs text-gray-500 mb-3">{item.description}</p>
            <hr className="my-2" />

            <div className="flex justify-between items-center mb-3 px-2">
              <span className="text-sm font-bold">{item.price}</span>
              <button className="bg-sky-400 text-white px-3 py-1 text-sm rounded hover:bg-sky-500">
                Buy Now
              </button>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500 px-2">
              <span>Category</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
