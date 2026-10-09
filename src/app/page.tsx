import { Suspense } from "react";
import Banner from "./components/Banner";
import PriceIncresed from "./components/PriceIncresed";
import PriceDecresed from "./components/PriceDecresed";

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
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto" role="status">
            <span className="text-sm bg-green-100 px-2 py-1 rounded-xl font-semibold text-green-600">
              তথ্য লোড হচ্ছে...
            </span>
          </div>
        }
      >

        <PriceIncresed></PriceIncresed>
      </Suspense>
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto" role="status">
            <span className="text-sm bg-green-100 px-2 py-1 rounded-xl font-semibold text-green-600">
              তথ্য লোড হচ্ছে...
            </span>
          </div>
        }
      >

        <PriceDecresed></PriceDecresed>
      </Suspense>
    </div>
  );
}
