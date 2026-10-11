const ProfileSkeleton = () => (
    <main className="min-h-screen p-5 mt-5 lg:p-0 lg:mt-10">
        <section className="max-w-200 mx-auto">
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">আমার প্রোফাইল</h2>
                <p className="text-slate-400">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>
            <div role="status" aria-label="প্রোফাইল লোড হচ্ছে">
                <span className="sr-only">প্রোফাইল লোড হচ্ছে…</span>
                <div aria-hidden="true" className="animate-pulse motion-reduce:animate-none">
                    <div className="flex flex-col items-center justify-center rounded-xl border bg-white px-8 py-5 lg:flex-row lg:justify-between">
                        <div className="flex w-full flex-col items-center gap-2 lg:w-auto lg:flex-row">
                            <div className="size-10 shrink-0 rounded-full bg-slate-200" />
                            <div className="w-full space-y-2 lg:w-auto">
                                <div className="mx-auto mt-2 h-6 w-32 max-w-full rounded bg-slate-200 lg:mx-0" />
                                <div className="mx-auto h-5 w-52 max-w-full rounded bg-slate-100 lg:mx-0" />
                            </div>
                        </div>
                        <div className="mt-5 h-11 w-32 rounded-xl bg-slate-200" />
                    </div>
                    <div className="mt-5 rounded-xl bg-white px-8 py-5">
                        <div className="h-7 w-44 max-w-full rounded bg-slate-200" />
                        <div className="mt-5 max-w-100 space-y-3">
                            <div className="h-6 w-12 rounded bg-slate-100" />
                            <div className="h-10 w-full rounded-xl border border-slate-200 bg-slate-100" />
                            <div className="h-10 w-44 max-w-full rounded-xl bg-slate-200" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default ProfileSkeleton;
