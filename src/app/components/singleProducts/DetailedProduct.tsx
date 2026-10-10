import { IParamProps } from "@/app/products/[productid]/page";


const DetailedProduct = async ({ params }: IParamProps) => {
    const { productid } = await params
    return (
        <main>
            <section>
                <h2>{productid}</h2>
            </section>
        </main>
    );
};

export default DetailedProduct;