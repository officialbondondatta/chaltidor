const NavLinksSkeleton = () => (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-2 lg:mb-2" role="status" aria-label="বিভাগের তালিকা লোড হচ্ছে">
        <span className="sr-only">বিভাগের তালিকা লোড হচ্ছে…</span>
        <div aria-hidden="true" className="flex gap-4 items-start justify-start overflow-x-auto animate-pulse motion-reduce:animate-none">
            {Array.from({ length: 8 }, (_, index) => (
                <div key={index} className="flex shrink-0 items-center gap-1 rounded-sm px-2 lg:py-1">
                    <div className="size-5 rounded bg-slate-200 lg:size-7" />
                    <div className="h-4 w-16 rounded bg-slate-200 lg:h-5" />
                </div>
            ))}
        </div>
    </div>
);

export default NavLinksSkeleton;
