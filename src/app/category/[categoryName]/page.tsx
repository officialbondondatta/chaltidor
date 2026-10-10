import CatgoryContent from "@/app/components/category/CatgoryContent";
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
                <Suspense fallback={<p>Loading..</p>}>
                    <CatgoryContent params={params}></CatgoryContent>
                </Suspense>
            </section>
        </main>
    );
};

export default CategorySinglePage;