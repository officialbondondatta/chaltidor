"use client"
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const SignInPage = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const signInData = Object.fromEntries(formData.entries()) as Record<string, string>
        console.log(signInData)
        toast.success("Succefully Signed in")
    };
    const handleGoogleSignIn = () => {
        console.log("google sign in")
    }

    return (
        <main className="lg:mt-10 mt-5 lg:p-0 p-5">
            <section className="max-w-7xl mx-auto min-h-screen">
                <div>
                    <div>
                        <h2 className="text-center text-2xl font-semibold">সাইন ইন</h2>
                        <p className="text-sm text-center text-slate-500">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                    </div>
                </div>
                <div className="mt-5">
                    <Form className="flex max-w-150 mx-auto bg-white py-4 px-8 rounded-xl border flex-col gap-4" onSubmit={onSubmit}>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>ইমেইল</Label>
                            <Input placeholder="you@example.com" className="border rounded-xl border-slate-400 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>পাসওয়ার্ড</Label>
                            <Input placeholder="আপনার পাসওয়ার্ড লিখুন" className="border rounded-xl border-slate-400 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500" />
                            <Description className="w-80 text-left mt-2">কমপক্ষে ৮টি অক্ষর হতে হবে, যার মধ্যে অন্তত ১টি বড় হাতের ইংরেজি অক্ষর (Uppercase) এবং ১টি সংখ্যা থাকতে হবে।</Description>
                            <FieldError />
                        </TextField>
                        <div className="flex gap-2">
                            <Button type="submit" className="w-full rounded-xl bg-green-700 font-semibold py-5 text-sm">
                                সাইন ইন
                            </Button>
                        </div>
                        <div className="flex items-center gap-4 my-4">
                            <div className="h-px flex-1 col-span-1 bg-slate-300"></div>
                            <span className="self-center text-sm text-center">অথবা</span>
                            <div className="h-px flex-1 col-span-1 bg-slate-300"></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 w-full border border-slate-400 rounded-xl py-2 font-semibold">
                                <FcGoogle className="text-xl" />  Google  দিয়ে চালিয়ে যান
                            </button>
                            <button onClick={handleGoogleSignIn} className=" w-full items-center justify-center flex gap-2 border border-slate-400 rounded-xl py-2 font-semibold">
                                <SiGithub className="text-xl" /> GitHub  দিয়ে চালিয়ে যান
                            </button>
                        </div>
                        <div className="flex gap-2 text-center justify-center text-sm">
                            <h2 className="text-slate-500">অ্যাকাউন্ট নেই? </h2>
                            <Link className="text-green-600 underline" href={"/sign-up"}>সাইন আপ করুন</Link>
                        </div>
                    </Form>
                </div>
                <div className="flex items-center justify-center mt-10 text-slate-500">
                    <Link className="text-center underline cursor-pointer" href={"/"}>← হোম পেজে ফিরে যান</Link>
                </div>
            </section>
        </main>
    );
};

export default SignInPage;