import Aside from "../componets/Aside";
import ProductList from "../componets/ProductsLsit";
import TopBar from "../componets/TopBar";

export default function Category() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 md:px-10 py-8 gap-8">
        <aside className="w-[250px] ">
          <Aside />
        </aside>
        <main className="flex-1">
          <ProductList />
        </main>
      </div>
    </div>
  );
}
