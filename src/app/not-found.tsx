import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const NotFoundPage = () => {
    return (
        <main className="flex min-h-[65vh] items-center justify-center px-5 py-16 sm:py-24">
            <section aria-labelledby="not-found-title" className="w-full max-w-xl rounded-3xl border border-green-100 bg-white px-6 py-12 text-center shadow-sm sm:px-12">
                <span className="inline-flex rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
                    চলতি দর · পৃষ্ঠা খুঁজে পাওয়া যায়নি
                </span>

                <div aria-hidden="true" className="relative mx-auto my-8 w-fit">
                    <p className="text-8xl font-bold tracking-tight text-red-500 sm:text-9xl">৪০৪</p>
                </div>

                <h1 id="not-found-title" className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    এই পাতাটি পাওয়া যাচ্ছে না
                </h1>
                <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-slate-500">
                    লিংকটি ভুল হতে পারে, অথবা পাতাটি সরিয়ে নেওয়া হয়েছে। হোম পেজে ফিরে আজকের বাজারদর দেখে নিন।
                </p>

                <Link href="/" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700">
                    <IoArrowBack aria-hidden="true" className="size-5" />
                    হোম পেজে ফিরুন
                </Link>
                <p className="mt-6 text-sm text-slate-400">প্রয়োজনীয় পণ্যের দাম, এক নজরে।</p>
            </section>
        </main>
    );
};

export default NotFoundPage;
