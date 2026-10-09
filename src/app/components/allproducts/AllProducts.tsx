import Products from "./Products";

const AllProducts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const allProducts = await res.json()

    return (
        <main className="p-5 lg:p-0">
            <section className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="lg:mt-10 mt-5">
                        <h2 className="text-xl font-semibold">সব পণ্য</h2>
                    </div>
                </div>
                <div>
                    <Products receivedData={allProducts}></Products>
                </div>
            </section>
        </main>
    );
};

export default AllProducts;