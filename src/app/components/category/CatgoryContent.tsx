import { ICategorySinglePageProps } from "@/app/category/[categoryName]/page";

const CatgoryContent = async ({ params }: ICategorySinglePageProps) => {
    const { categoryName } = await params
    console.log(categoryName)
    return (
        <div>

        </div>
    );
};

export default CatgoryContent;