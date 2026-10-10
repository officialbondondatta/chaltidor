import { toBanglaNumber } from "@/app/utils/toBanglaNumbers";
import Marquee from "react-fast-marquee";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

export interface ICategoryProps {
    id: string,
    image: string,
    nameBn: string,
    slug: string,
    today: number,
    change: {
        dir: string,
        pct: number
    }
}
const MarqueeText = async () => {
    const res = await fetch(`${process.env.BASE_URL_API}/products`)
    const resData: ICategoryProps[] = await res.json()
    return (
        <div className="border-t border-separator">
            <Marquee speed={160} pauseOnHover={true}>
                {
                    resData.map(category => (
                        <div key={category.id} className="flex items-center justify-center mr-8 text-sm lg:py-2 py-1">
                            <span className="mr-2">{category.image}</span>
                            <span className="mr-1">{category.nameBn}</span>
                            <span className=" text-slate-500">{toBanglaNumber(category.today)} টাকা/কেজি</span>
                            {
                                category.change.dir === "up" ? <IoCaretUp className="text-red-600 text-xl ml-1" /> : <IoCaretDown className="text-green-700 text-xl ml-1" />
                            }
                            <span>{toBanglaNumber(Math.abs(category.change.pct))} %</span>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default MarqueeText;