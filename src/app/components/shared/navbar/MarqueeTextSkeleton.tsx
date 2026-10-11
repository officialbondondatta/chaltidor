const MarqueeTextSkeleton = () => (
    <div className="border-t border-separator overflow-hidden" role="status" aria-label="বাজারদরের তথ্য লোড হচ্ছে">
        <span className="sr-only">বাজারদরের তথ্য লোড হচ্ছে…</span>
        <div aria-hidden="true" className="flex w-full items-center animate-pulse motion-reduce:animate-none">
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="mr-8 flex shrink-0 items-center py-1 lg:py-2">
                    <div className="mr-2 size-5 rounded bg-slate-200" />
                    <div className="mr-1 h-4 w-16 rounded bg-slate-200" />
                    <div className="h-4 w-24 rounded bg-slate-100" />
                    <div className="ml-1 h-5 w-12 rounded bg-slate-200" />
                </div>
            ))}
        </div>
    </div>
);

export default MarqueeTextSkeleton;
