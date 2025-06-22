import FeaturedProducts from "../componets/FeaturedProducts";
import HeaderBanner from "../componets/HeaderBanner";
import LatestArrival from "../componets/LatestArrival";
import ProductCategoryCards from "../componets/ProductCategoryCards";

export default function Home() {
  return (
    <>
      <HeaderBanner />
      <ProductCategoryCards />
      <LatestArrival />
      <FeaturedProducts />
    </>
  );
}
