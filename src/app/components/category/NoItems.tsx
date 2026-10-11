import { IoBasketOutline } from "react-icons/io5";

const NoItems = () => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-12 text-center">
            <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-50 text-green-700">
                <IoBasketOutline aria-hidden="true" className="size-6" />
            </span>
            <h2 className="text-lg font-semibold text-slate-800">এই বিভাগে এখনো কোনো পণ্য নেই</h2>
            <p className="mt-2 text-sm text-slate-500">অন্য কোনো বিভাগে বাজারদর দেখে নিন।</p>
        </div>
    );
};

export default NoItems;
