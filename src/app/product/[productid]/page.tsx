import DetailedProduct from "@/app/components/singleProducts/DetailedProduct";
import { Suspense } from "react";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

export interface IParamProps {
    params: Promise<{ productid: string }>
}
const SingleProductDetailsPage = ({ params }: IParamProps) => {
    return (
        <main className="min-h-screen">
            <section>
                <Suspense fallback={<ProductDetailsSkeleton />}>
                    <DetailedProduct params={params}></DetailedProduct>
                </Suspense>
            </section>
        </main>
    );
};

export default SingleProductDetailsPage;
