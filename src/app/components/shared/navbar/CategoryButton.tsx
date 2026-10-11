"use client"
import { usePathname, useRouter } from 'next/navigation';
import { INavCategoryProps } from './NavLinks';

const CategoryButton = ({ category }: { category: INavCategoryProps }) => {
    const router = useRouter()
    const pathName = usePathname()
    const urlPath = pathName.split("/")[2]
    const handleCategoryClick = (categoryName: string) => {
        router.push(`/category/${categoryName}`)
    }
    return (
        <button onClick={() => handleCategoryClick(category.slug)} className={` flex hover:bg-slate-200 gap-1 px-2 lg:py-1 ${urlPath === category.slug ? "bg-green-700 text-white" : ""}  active:text-white rounded-sm lg:text-lg text-sm cursor-pointer`}>
            <span>{category.icon}</span>
            <span >{category.nameBn}</span>
        </button>
    );
};

export default CategoryButton;