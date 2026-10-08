"use client"
import React from 'react';
import { INavCategoryProps } from './NavLinks';

const CategoryButton = ({ category }: { category: INavCategoryProps }) => {
    const handleCategoryClick = (categoryName: string) => {
        console.log("categoryClicked", categoryName)
    }
    return (
        <button onClick={() => handleCategoryClick(category.nameBn)} className="flex btn gap-1 cursor-pointer">
            <span>{category.icon}</span>
            <span >{category.nameBn}</span>
        </button>
    );
};

export default CategoryButton;