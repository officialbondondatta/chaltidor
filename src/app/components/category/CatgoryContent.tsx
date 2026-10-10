import { ICategorySinglePageProps } from "@/app/category/[categoryName]/page";
import { IDetailedProductProps } from "@/app/types/detailedProductType";
import { toBanglaNumber } from "@/app/utils/toBanglaNumbers";
import Products from "../allproducts/Products";

export interface ICategoryProps {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}
const CatgoryContent = async ({ params }: ICategorySinglePageProps) => {
    const { categoryName } = await params
    const resOriginCategory = await fetch(`${process.env.BASE_URL_API}/categories/${categoryName}`)
    const originCategory: ICategoryProps = await resOriginCategory.json()
    const res = await fetch(`${process.env.BASE_URL_API}/products?category=${categoryName}`)
    const category: IDetailedProductProps[] = await res.json()
    return (
        <div className="">
            <div className="flex items-center gap-3 bg-white py-4 px-8 rounded-xl">
                <div className="bg-slate-100 py-3 px-4 text-3xl rounded-xl">
                    {originCategory.icon}
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">{originCategory.nameBn}</h2>
                    <p>{toBanglaNumber(category.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            <div className="mt-5">
                <Products receivedData={category}></Products>
            </div>
        </div>
    );
};

export default CatgoryContent;