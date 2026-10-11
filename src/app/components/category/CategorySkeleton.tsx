const CategorySkeleton = () => {
    return (
        <div role="status" aria-label="পণ্যের তথ্য লোড হচ্ছে">
            <span className="sr-only">পণ্যের তথ্য লোড হচ্ছে…</span>
            <div aria-hidden="true" className="animate-pulse motion-reduce:animate-none">
                <div className="flex items-center gap-3 rounded-xl bg-white px-8 py-4">
                    <div className="size-16 shrink-0 rounded-xl bg-slate-200" />
                    <div className="flex-1 space-y-3">
                        <div className="h-7 w-36 max-w-full rounded bg-slate-200" />
                        <div className="h-5 w-64 max-w-full rounded bg-slate-100" />
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="h-5 w-48 rounded bg-slate-200" />
                    <div className="h-10 w-32 rounded-lg bg-slate-200" />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }, (_, index) => (
                        <div key={index} className="rounded-xl border bg-white px-5 py-4">
                            <div className="flex items-center gap-3">
                                <div className="size-12 rounded-md bg-slate-200" />
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
    );
};

export default CategorySkeleton;
