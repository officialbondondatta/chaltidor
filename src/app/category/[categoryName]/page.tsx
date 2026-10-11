import CatgoryContent from "@/app/components/category/CatgoryContent";
import CategorySkeleton from "@/app/components/category/CategorySkeleton";
import { Suspense } from "react";

export interface ICategorySinglePageProps {
    params: Promise<{
        categoryName: string
    }>
}


const CategorySinglePage = ({ params }: ICategorySinglePageProps) => {
    return (
        <main className="min-h-screen p-5 lg:p-0 lg:mt-10 mt-5">
            <section className="max-w-7xl mx-auto">
                <Suspense fallback={<CategorySkeleton />}>
                    <CatgoryContent params={params} />
                </Suspense>
            </section>
        </main>
    );
};

export default CategorySinglePage;
