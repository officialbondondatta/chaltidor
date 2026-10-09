import Image from "next/image";
import { connection } from "next/server";
import BannerImage from "@/asests/bazar-hero.png"
import Link from "next/link";
const Banner = async () => {
    await connection();

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    })
    return (
        <section id="banner" className="max-w-7xl mx-auto lg:mt-10 mt-2 p-5 lg:p-0">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 bg-white rounded-lg px-4 py-10">
                <div className="flex flex-col space-y-4">
                    <span className="self-start bg-green-100 px-2 py-1 rounded-xl font-semibold text-green-600">{date}</span>
                    <h2 className="text-2xl lg:text-3xl font-bold">আজকের বাজারের দাম এক নজরে</h2>
                    <p className="text-lg lg:text-xl text-slate-600 font-light">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <a href="#সব-পণ্য" className="self-start bg-green-700 font-semibold cursor-pointer hover:bg-green-800 text-white px-3 py-2 rounded-md">সব পণ্য দেখুন</a>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src={BannerImage}
                        alt="bannerImage"
                        className=""
                    />
                </div>
            </div>

        </section>
    );
};

export default Banner;
