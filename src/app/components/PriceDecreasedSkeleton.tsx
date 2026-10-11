import { IoCaretDown } from "react-icons/io5";

const PriceDecreasedSkeleton = () => (
    <div className="p-5 lg:p-0">
        <section className="max-w-7xl mx-auto mt-5 lg:mt-10">
            <div className="flex items-center gap-2 mb-5">
                <IoCaretDown aria-hidden="true" className="text-green-700 text-xl" />
                <h2 className="text-xl font-semibold">আজ দাম কমেছে</h2>
            </div>
            <div role="status" aria-label="দাম কমেছে এমন পণ্যের তথ্য লোড হচ্ছে">
                <span className="sr-only">পণ্যের তথ্য লোড হচ্ছে…</span>
                <div aria-hidden="true" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 animate-pulse motion-reduce:animate-none">
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
        </section>
    </div>
);

export default PriceDecreasedSkeleton;
