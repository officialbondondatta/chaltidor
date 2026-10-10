import { IParamProps } from "@/app/products/[productid]/page";
import { getAverageUnit } from "@/app/utils/getAverageUnit";
import { getBanglaUnit } from "@/app/utils/getBanglaUnit";
import { gethighestPrice } from "@/app/utils/gethighestUnit";
import { getLowestPrice } from "@/app/utils/getLowestPrice";
import { toBanglaNumber } from "@/app/utils/toBanglaNumbers";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import ProductDetailsTable from "./ProductDetailsTable";
import { IDetailedProductProps } from "@/app/types/detailedProductType";
import Link from "next/link";



const DetailedProduct = async ({ params }: IParamProps) => {
    const { productid } = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productid}`)
    const productDetails: IDetailedProductProps = await res.json()
    return (
        <main className="p-5 lg:p-0 lg:mt-10 mt-5">
            <section className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1 bg-white py-8 px-4 items-center justify-between rounded-xl border">
                    <div className="flex gap-4">
                        <div className="bg-slate-100 px-6 py-5 rounded-md self-start"  >
                            {productDetails.image}
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

                <div className="lg:mt-10 mt-5 bg-white px-4 py-8 rounded-xl border">
                    <h2 className="text-xl font-semibold">দামের সারসংক্ষেপ</h2>
                    <div className="mt-5 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 grid gap-5">
                        <div className="py-4 px-5 border rounded-xl">
                            <h2 className="text-slate-400">সর্বনিম্ন দাম</h2>
                            <p className="text-green-700"><span className="text-2xl mr-2 font-bold text-green-700">
                                {getLowestPrice(productDetails.markets)}
                            </span>
                                টাকা</p>
                            <p className="text-slate-400">সবচেয়ে কম দামের বাজার</p>
                        </div>
                        <div className="py-4 px-5 border rounded-xl">
                            <h2 className="text-slate-400">সর্বাধিক দাম</h2>
                            <p className="text-red-700"><span className="text-2xl mr-2 font-bold text-red-700">
                                {gethighestPrice(productDetails.markets)}
                            </span>
                                টাকা</p>
                            <p className="text-slate-400">সবচেয়ে বেশি দামের বাজার</p>
                        </div>
                        <div className="py-4 px-5 border rounded-xl">
                            <h2 className="text-slate-400">গড় দাম</h2>
                            <p className="text-green-700"><span className="text-2xl mr-2 font-bold text-green-700">
                                {getAverageUnit(productDetails.markets)}
                            </span>
                                টাকা</p>
                            <p className="text-slate-400">প্রতি {getBanglaUnit(productDetails.unit)} -এর হিসাবে </p>
                        </div>
                    </div>

                    <h2 className="text-xl mt-5 font-semibold">বাজারভিত্তিক আজকের দাম</h2>
                    <div>
                        <ProductDetailsTable details={productDetails} ></ProductDetailsTable>
                    </div>
                </div>
                <div className="mt-8 flex items-center gap-2 font-semibold">
                    <h2>{productDetails.categoryIcon}</h2>
                    <Link href={`/category/${productDetails.category}`}> সব {productDetails.categoryNameBn}</Link>
                </div>
            </section>
        </main>
    );
};

export default DetailedProduct;