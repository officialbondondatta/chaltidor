import { IoCaretUp } from "react-icons/io5";
import ProductCards, { IProductProps } from "./ProductCards";

const PriceIncresed = async () => {
    const res = await fetch(`${process.env.BASE_URL_API}/products`)
    const allData: IProductProps[] = await res.json()
    const allIncreasedData = allData.filter(data => data.change.dir === "up")
    const descendingSortedData = allIncreasedData.sort((a, b) => b.change.pct - a.change.pct)
    return (
        <main className="p-5 lg:p-0">
            <section className="max-w-7xl mx-auto lg:mt-10 mt-5">
                <div className="flex items-center justify-start gap-2 mb-5">
                    <IoCaretUp className="text-red-700 text-xl"></IoCaretUp>
                    <h2 className="text-xl font-semibold ">আজ দাম বেড়েছে</h2>
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

export default PriceIncresed;