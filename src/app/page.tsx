import { Suspense } from "react";
import Banner from "./components/Banner";
import BannerSkeleton from "./components/BannerSkeleton";
import PriceIncresed from "./components/PriceIncresed";
import PriceIncreasedSkeleton from "./components/PriceIncreasedSkeleton";
import PriceDecresed from "./components/PriceDecresed";
import PriceDecreasedSkeleton from "./components/PriceDecreasedSkeleton";
import AllProducts from "./components/allproducts/AllProducts";
import AllProductsSkeleton from "./components/allproducts/AllProductsSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<BannerSkeleton />}>
        <Banner></Banner>
      </Suspense>
      <Suspense fallback={<PriceIncreasedSkeleton />}>
        <PriceIncresed></PriceIncresed>
      </Suspense>
      <Suspense fallback={<PriceDecreasedSkeleton />}>
        <PriceDecresed></PriceDecresed>
      </Suspense>
      <div id="সব-পণ্য">
        <Suspense fallback={<AllProductsSkeleton />}>
          <AllProducts></AllProducts>
        </Suspense>
      </div>
    </div>
  );
}
