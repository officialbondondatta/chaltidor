import DetailedProduct from "@/app/components/singleProducts/DetailedProduct";
import { Suspense } from "react";

export interface IParamProps {
    params: Promise<{ productid: string }>
}
const SingleProductDetailsPage = ({ params }: IParamProps) => {
    return (
        <main className="min-h-screen">
            <section>
                <Suspense fallback={<p>Loading..</p>}>
                    <DetailedProduct params={params}></DetailedProduct>
                </Suspense>
            </section>
        </main>
    );
};

export default SingleProductDetailsPage;