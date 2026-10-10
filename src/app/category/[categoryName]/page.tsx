import CatgoryContent from "@/app/components/category/CatgoryContent";
import { Suspense } from "react";

export interface ICategorySinglePageProps {
    params: Promise<{
        categoryName: string
    }>
}
const CategorySinglePage = ({ params }: ICategorySinglePageProps) => {

    return (
        <div>
            <Suspense>
                <CatgoryContent params={params}></CatgoryContent>
            </Suspense>
        </div>
    );
};

export default CategorySinglePage;