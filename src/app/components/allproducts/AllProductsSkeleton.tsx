const AllProductsSkeleton = () => (
    <div className="p-5 lg:p-0">
        <section className="max-w-7xl mx-auto">
            <h2 className="mt-5 text-xl font-semibold lg:mt-10">সব পণ্য</h2>
            <div role="status" aria-label="সব পণ্যের তথ্য লোড হচ্ছে">
                <span className="sr-only">সব পণ্যের তথ্য লোড হচ্ছে…</span>
                <div aria-hidden="true" className="animate-pulse motion-reduce:animate-none">
                    <div className="flex items-center justify-between gap-4">
                        <div className="h-5 w-48 rounded bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-10 rounded bg-slate-200" />
                            <div className="h-10 w-24 rounded-lg bg-slate-200" />
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }, (_, index) => (
                            <div key={index} className="rounded-xl border bg-white px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-12 shrink-0 rounded-md bg-slate-200" />
                                    <div className="space-y-2">
                                        <div className="h-6 w-28 rounded bg-slate-200" />
                                        <div className="h-4 w-16 rounded bg-slate-100" />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-end justify-between">
                                    <div className="space-y-2">
                                        <div className="h-4 w-20 rounded bg-slate-100" />
                                        <div className="h-7 w-24 rounded bg-slate-200" />
                                    </div>
                                    <div className="h-7 w-16 rounded-lg bg-slate-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AllProductsSkeleton;
