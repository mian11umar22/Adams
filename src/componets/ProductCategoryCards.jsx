import { ProductCategory } from "../Data/ProductCategoryCards";

export default function ProductCategoryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10 max-w-6xl mx-auto">
      {ProductCategory.map((product, index) => (
        <div
          key={index}
          className="bg-white    text-center p-5"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-56 object-cover mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {product.description }
          </p>
          <button className="bg-sky-400 text-white px-5 py-2 rounded hover:bg-sky-500 transition">
            Visit Store
          </button>
        </div>
      ))}
    </div>
  );
}
