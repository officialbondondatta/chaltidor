import { IoCaretDown } from "react-icons/io5";
import ProductCards, { IProductProps } from "./ProductCards";

const PriceDecresed = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const allData: IProductProps[] = await res.json()
    const allDecresedData = allData.filter(data => data.change.dir === "down")
    const descendingSortedData = allDecresedData.sort((a, b) => a.change.pct - b.change.pct)
    return (
        <main className="p-5 lg:p-0">
            <section className="max-w-7xl mx-auto lg:mt-10 mt-5">
                <div className="flex items-center justify-start gap-2 mb-5">
                    <IoCaretDown className="text-green-700 text-xl"></IoCaretDown>
                    <h2 className="text-xl font-semibold ">আজ দাম কমেছে</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        descendingSortedData.slice(0, 6).map(data => (
                            <ProductCards key={data.id} product={data}></ProductCards>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};

export default PriceDecresed;