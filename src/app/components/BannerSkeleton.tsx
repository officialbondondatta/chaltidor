import BannerImage from "@/asests/bazar-hero.png";

const BannerSkeleton = () => (
    <section id="banner" className="max-w-7xl mx-auto lg:mt-10 mt-2 p-5 lg:p-0" role="status" aria-label="ব্যানার লোড হচ্ছে">
        <span className="sr-only">ব্যানার লোড হচ্ছে…</span>
        <div aria-hidden="true" className="grid grid-cols-1 gap-5 lg:grid-cols-2 bg-white rounded-lg px-4 py-10 animate-pulse motion-reduce:animate-none">
            <div className="flex flex-col space-y-4">
                <div className="h-8 w-56 max-w-full rounded-xl bg-green-100" />
                <div className="h-8 w-96 max-w-full rounded bg-slate-200 lg:h-9" />
                <div className="space-y-2">
                    <div className="h-5 w-full rounded bg-slate-100 lg:h-6" />
                    <div className="h-5 w-full rounded bg-slate-100 lg:h-6" />
                    <div className="h-5 w-3/4 rounded bg-slate-100 lg:h-6" />
                </div>
                <div className="h-10 w-36 rounded-md bg-green-100" />
            </div>
            <div className="flex items-center justify-center">
                <div
                    className="w-full rounded-lg bg-slate-100"
                    style={{
                        aspectRatio: `${BannerImage.width} / ${BannerImage.height}`,
                        maxWidth: BannerImage.width,
                    }}
                />
            </div>
        </div>
    </section>
);

export default BannerSkeleton;
