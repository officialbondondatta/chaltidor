import CategoryButton from "./CategoryButton";
export interface INavCategoryProps {
    icon: string,
    id: string,
    nameBn: string,
    slug: string
}
const NavLinks = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories")
    const categories: INavCategoryProps[] = await res.json()
    console.log(categories)
    return (
        <div className="max-w-7xl mx-auto px-3  lg:px-0 mt-2 mb-2">
            <div className="flex gap-4 items-start justify-start overflow-x-auto">
                {
                    categories.map(category => (
                        <CategoryButton category={category} key={category.id}></CategoryButton>
                    ))
                }
            </div>
        </div>
    );
};

export default NavLinks;