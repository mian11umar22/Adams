export default function Aside() {
  return (
    <div className="w-full lg:max-w-[250px] flex flex-col px-4 py-6 space-y-5 text-sm text-gray-800">
      {/* Categories */}
      <div>
        <h2 className="font-bold mb-2 text-base">Categories</h2>
        <div className="flex flex-col space-y-1">
          <span>Jewelry (3)</span>
          <span>Apparel (5)</span>
          <span>Rings (8)</span>
          <span>Dress & Jackets (12)</span>
          <span>Necklaces (14)</span>
          <span>Bags (15)</span>
        </div>
      </div>

      {/* Best Sellers */}
      <div>
        <h2 className="font-bold mb-2 text-base">Best Sellers</h2>
        <div className="bg-white shadow-sm p-2">
          <img
            src="images/details-pic-main.jpg"
            alt="Best Seller"
            className="w-full mb-2 object-contain"
          />
          <p className="text-center text-xs">Silver Ring With a Diamond</p>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h2 className="font-bold mb-2 text-base">Price Range</h2>
        <div className="flex flex-col space-y-1">
          <span>$5.0 – $50.0</span>
          <span>$50.0 – $100.0</span>
          <span>$100.0 – $150.0</span>
          <span>$150.0 – $200.0</span>
          <span>$200.0 – $300.0</span>
        </div>
      </div>

      {/* Product Preview */}
      <div className="space-y-3">
        {[
          { name: "Blue Sky Diamond", price: "$2789.0" },
          { name: "Fiery Red Ring", price: "$2789.0" },
        ].map((item, idx) => (
          <div key={idx} className="flex space-x-2 items-start">
            <img
              src="images/details-pic-main.jpg"
              alt=""
              className="w-14 h-14 object-contain"
            />
            <div className="text-xs">
              <p className="font-semibold">{item.name}</p>
              <p className="text-yellow-400">★★★★★</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
