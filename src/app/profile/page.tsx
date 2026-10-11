"use client"

import { PiSignOut } from "react-icons/pi";
import { signOut, useSession } from "../lib/auth-client";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";

import React from "react";
import ProfileSkeleton from "./ProfileSkeleton";
import Link from "next/link";
const ProfilePage = () => {
    const { data: session, isPending } = useSession()
    const router = useRouter()
    if (isPending) return <ProfileSkeleton />;
    if (!session) return <p>অনুগ্রহ করে সাইন ইন করুন।</p>;
    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("আপনি সফলভাবে সাইন আউট করেছেন")
                    router.push("/")
                }
            }
        })
    }

    return (
        <main className="min-h-screen lg:p-0 p-5 lg:mt-10 mt-5">
            <section className="max-w-200 mx-auto">
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold">আমার প্রোফাইল</h2>
                    <p className="text-slate-400 ">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                </div>
                <div className="bg-white py-5 px-8 flex lg:flex-row flex-col items-center lg:justify-between justify-center rounded-xl border">
                    <div className="flex lg:flex-row gap-2 flex-col items-center">
                        <div>
                            <span className="bg-green-700 text-white py-2 px-3 rounded-full font-semibold">
                                {session?.user.name.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <h2 className="font-semibold lg:text-left text-center mt-2">{session?.user.name}</h2>
                            <span className="text-sm text-slate-500">{session?.user.email}</span>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSignOut} className="flex mt-5 items-center gap-2 border border-red-400 py-2 px-4 rounded-xl cursor-pointer hover:bg-red-700 hover:text-white">
                            <PiSignOut className="text-xl" />
                            সাইন আউট
                        </button>
                    </div>
                </div>
                <div className=" mt-5 flex items-center justify-center  text-white font-semibold self-start">
                    <Link href={`/profile/update-profile`} className="hover:bg-green-700 bg-green-600  py-2 rounded-lg   px-2">হালনাগাদ করুন</Link>
                </div>

            </section>
        </main>
    );
};

export default ProfilePage;
