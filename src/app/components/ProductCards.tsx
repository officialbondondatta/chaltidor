"use client"
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import { toBanglaNumber } from "../utils/toBanglaNumbers";
import { useRouter } from "next/navigation";

export interface IProductProps {
    id: number,
    image: string,
    nameBn: string,
    change: {
        dir: string,
        pct: number
    },
    today: number,
    unit: string
}

const ProductCards = ({ product }: { product: IProductProps }) => {
    const router = useRouter()
    const getBanglaUnit = (unit: string) => {
        switch (unit.toLowerCase()) {
            case "kg":
                return "কেজি";
            case "gram":
                return "গ্রাম";
            case "liter":
                return "লিটার";
            case "piece":
                return "পিস";
            case "dozen":
                return "ডজন";
            default:
                return unit;
        }
    };
    const handleProductDetails = () => {
        console.log("productClicked", product)
        router.push(`/products/${product.id}`)
    }
    return (
        <div onClick={handleProductDetails} key={product.id} className="bg-white py-4 px-5 rounded-xl hover:border-green-700 border cursor-pointer hover:shadow-slate-400 hover:shadow-sm">
            <div className="flex items-center gap-3">
                <div className="bg-slate-100 text-2xl py-2 rounded-md flex items-center justify-center px-3">
                    {product.image}
                </div>
                <div>
                    <h2 className="font-bold text-lg">{product.nameBn}</h2>
                    <span className="text-sm text-slate-400">প্রতি {getBanglaUnit(product.unit)} </span>
                </div>
            </div>
            <div className="flex items-end justify-between">
                <div className="mt-4 flex flex-col gap-1">
                    <h2 className="text-sm text-slate-400">আজকের দাম</h2>
                    <p className="text-xl font-semibold">{toBanglaNumber(product.today)}
                        <span className="text-sm ml-2 font-normal">
                            টাকা
                        </span>
                    </p>
                </div>
                <div className="flex items-center justify-end bg-slate-100 px-2 py-1 rounded-lg">
                    {product.change.dir === "up" ? <IoCaretUp className="text-red-700"></IoCaretUp> : <IoCaretDown className="text-green-700 "></IoCaretDown>}
                    <span className="text-sm">{toBanglaNumber(Math.abs(product.change.pct))} %</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;