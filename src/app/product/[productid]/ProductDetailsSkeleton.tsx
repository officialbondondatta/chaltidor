const ProductDetailsSkeleton = () => {
    return (
        <div role="status" aria-label="পণ্যের বিস্তারিত তথ্য লোড হচ্ছে" className="mt-5 p-5 lg:mt-10 lg:p-0">
            <span className="sr-only">পণ্যের বিস্তারিত তথ্য লোড হচ্ছে…</span>
            <div aria-hidden="true" className="mx-auto max-w-7xl animate-pulse motion-reduce:animate-none">
                <div className="mb-5 flex gap-3">
                    <div className="h-5 w-10 rounded bg-slate-200" />
                    <div className="h-5 w-20 rounded bg-slate-200" />
                    <div className="h-5 w-24 rounded bg-slate-200" />
                </div>

                <div className="grid grid-cols-1 items-center gap-5 rounded-xl border bg-white px-4 py-8 md:grid-cols-2">
                    <div className="flex gap-4">
                        <div className="size-16 shrink-0 rounded-md bg-slate-100" />
                        <div className="min-w-0 flex-1 space-y-2">
                            <div className="h-9 w-44 max-w-full rounded bg-slate-200" />
                            <div className="h-5 w-48 max-w-full rounded bg-slate-100" />
                            <div className="h-5 w-64 max-w-full rounded bg-slate-100" />
                        </div>
                    </div>
                    <div className="space-y-2 rounded-xl bg-slate-100 px-4 py-3 md:justify-self-end">
                        <div className="mx-auto h-5 w-20 rounded bg-slate-200" />
                        <div className="mx-auto h-9 w-24 rounded bg-slate-200" />
                        <div className="mx-auto h-4 w-20 rounded bg-slate-200" />
                        <div className="mx-auto h-4 w-14 rounded bg-slate-200" />
                    </div>
                </div>

                <div className="mt-5 rounded-xl border bg-white px-4 py-8 lg:mt-10">
                    <div className="h-7 w-40 rounded bg-slate-200" />
                    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                        {Array.from({ length: 3 }, (_, index) => (
                            <div key={index} className="space-y-2 rounded-xl border px-5 py-4">
                                <div className="h-5 w-24 rounded bg-slate-100" />
                                <div className="h-8 w-28 rounded bg-slate-200" />
                                <div className="h-5 w-44 max-w-full rounded bg-slate-100" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 h-7 w-56 max-w-full rounded bg-slate-200" />
                    <div className="mt-4 overflow-x-auto rounded-xl border">
                        <div className="min-w-135">
                            <div className="grid grid-cols-5 gap-4 bg-slate-100 px-4 py-3">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <div key={index} className="h-4 w-16 rounded bg-slate-200" />
                                ))}
                            </div>
                            {Array.from({ length: 4 }, (_, row) => (
                                <div key={row} className="grid grid-cols-5 gap-4 px-4 py-4 even:bg-slate-100">
                                    {Array.from({ length: 5 }, (_, column) => (
                                        <div key={column} className="h-5 w-20 rounded bg-slate-200" />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 h-6 w-32 rounded bg-slate-200" />
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;
