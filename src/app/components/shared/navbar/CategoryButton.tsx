"use client"
import { useRouter } from 'next/navigation';
import { INavCategoryProps } from './NavLinks';

const CategoryButton = ({ category }: { category: INavCategoryProps }) => {
    const router = useRouter()
    const handleCategoryClick = (categoryName: string) => {
        router.push(`/category/${categoryName}`)
    }
    return (
        <button onClick={() => handleCategoryClick(category.slug)} className=" flex hover:bg-slate-200 gap-1 px-2 lg:py-1 active:bg-green-700 active:text-white rounded-sm lg:text-lg text-sm cursor-pointer">
            <span>{category.icon}</span>
            <span >{category.nameBn}</span>
        </button>
    );
};

export default CategoryButton;