import { Product } from "../Data/ProductList";

export default function ProductList() {
  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {Product.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm text-center p-5"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain mb-4"
            />
            <h2 className="text-base font-semibold mb-1">{product.title}</h2>
            <hr className="my-2" />
            <p className="text-xs text-gray-500 mb-3">{product.description}</p>
            <div className="flex justify-between items-center mb-2 px-2">
              <span className="text-sm font-bold">{product.price}</span>
              <button className="bg-sky-400 text-white px-3 py-1 text-sm rounded hover:bg-sky-500 transition">
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

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2 text-sm">
        <button className="px-3 py-1 border border-gray-200 rounded">
          Previous
        </button>
        <button className="px-3 py-1 border bg-sky-400 text-white">1</button>
        <button className="px-3 py-1 border border-gray-200">2</button>
        <button className="px-3 py-1 border border-gray-200">3</button>
        <button className="px-3 py-1 border border-gray-200">4</button>
        <button className="px-3 py-1 border border-gray-200 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
