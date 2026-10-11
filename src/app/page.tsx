import { Suspense } from "react";
import Banner from "./components/Banner";
import PriceIncresed from "./components/PriceIncresed";
import PriceIncreasedSkeleton from "./components/PriceIncreasedSkeleton";
import PriceDecresed from "./components/PriceDecresed";
import PriceDecreasedSkeleton from "./components/PriceDecreasedSkeleton";
import AllProducts from "./components/allproducts/AllProducts";
import AllProductsSkeleton from "./components/allproducts/AllProductsSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto" role="status">
            <span className="text-sm bg-green-100 px-2 py-1 rounded-xl font-semibold text-green-600">
              তারিখ লোড হচ্ছে...
            </span>
          </div>
        }
      >
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
