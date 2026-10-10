import { IParamProps } from "@/app/products/[productid]/page";
import { getBanglaUnit } from "@/app/utils/getBanglaUnit";
import { toBanglaNumber } from "@/app/utils/toBanglaNumbers";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

export interface IDetailedProductProps {
    id: number,
    slug: string,
    nameBn: string,
    category: string,
    categoryNameBn: string,
    categoryIcon: string,
    unit: string,
    image: string,
    today: number,
    yesterday: number,
    lastWeek: number,
    lastMonth: number,
    change: {
        dir: "down" | "up",
        pct: number
    },
    markets: [
        {
            market: string,
            division: string,
            min: number,
            max: number
        }],

}

const DetailedProduct = async ({ params }: IParamProps) => {
    const { productid } = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productid}`)
    const productDetails: IDetailedProductProps = await res.json()
    console.log(productDetails)
    return (
        <main className="p-5 lg:p-0 lg:mt-10 mt-5">
            <section className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1 bg-white py-8 px-4 items-center justify-between rounded-xl border">
                    <div className="flex gap-4">
                        <div className="bg-slate-100 px-6 py-5 rounded-md self-start"  >
                            {productDetails.categoryIcon}
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-3xl font-semibold">{productDetails.nameBn}</h2>
                            <p className="text-slate-500">প্রতি {getBanglaUnit(productDetails.unit)} - {productDetails.categoryNameBn}</p>
                            <p className="text-slate-500">গতকালের তুলনায় আজ দাম
                                <span className="font-semibold">{productDetails.change.dir === "up" ? " বেড়েছে " : productDetails.change.dir === "down" && " কমেছে "}</span>
                                {toBanglaNumber(Math.abs(productDetails.change.pct))} %
                            </p>
                        </div>
                    </div>
                    <div className="lg:justify-self-end md:justify-self-end bg-slate-100 py-2 px-3 rounded-md text-center">
                        <h2 className=" text-slate-500">আজকের দাম</h2>
                        <p className="text-center font-semibold text-3xl">{toBanglaNumber(productDetails.today)}</p>
                        <span className="text-center text-sm text-slate-500">টাকা / {getBanglaUnit(productDetails.unit)}</span>
                        <div className="flex items-center justify-center">
                            {
                                productDetails.change.dir === "up" ?
                                    <>
                                        <IoCaretUp className="text-red-700 text-lg"></IoCaretUp>
                                        <span className="text-sm text-red-700">{toBanglaNumber(Math.abs(productDetails.change.pct))} %</span>
                                    </>
                                    :
                                    productDetails.change.dir === "down" &&
                                    <>
                                        <IoCaretDown className="text-green-700 text-lg"></IoCaretDown>
                                        <span className="text-sm text-green-700">{toBanglaNumber(Math.abs(productDetails.change.pct))} %</span>
                                    </>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DetailedProduct;