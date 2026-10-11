"use client"

import { PiSignOut } from "react-icons/pi";
import { signOut, updateUser, useSession } from "../lib/auth-client";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import React from "react";
const ProfilePage = () => {
    const { data: session, isPending } = useSession()
    const router = useRouter()
    if (isPending) return <p>লোড হচ্ছে...</p>;
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
    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const updatedInfo = Object.fromEntries(formData.entries())
        const res = await updateUser({
            name: updatedInfo.name as string
        })
        if (res?.data?.status) {
            toast.success("নাম সফলভাবে হালনাগাদ করা হয়েছে")
        }

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

                <div className="mt-5 bg-white rounded-xl py-5 px-8">
                    <h2 id="update-name-heading" className="text-lg font-semibold">নাম হালনাগাদ করুন</h2>
                    <div>
                        <Form className="max-w-100 mt-5" onSubmit={handleUpdate}>
                            <Fieldset aria-labelledby="update-name-heading">
                                <FieldGroup>
                                    <TextField
                                        isRequired
                                        name="name"
                                        defaultValue={session?.user.name ?? ""}
                                        validate={(value) => {
                                            if (value.length < 3) {
                                                return "Name must be at least 3 characters";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label className="text-lg">নাম</Label>
                                        <Input className="border rounded-xl border-slate-400 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500" />
                                        <FieldError />
                                    </TextField>
                                </FieldGroup>
                                <Fieldset.Actions>
                                    <Button type="submit" className="bg-green-700 rounded-xl font-semibold hover:bg-green-800">
                                        নাম হালনাগাদ করুন
                                    </Button>
                                </Fieldset.Actions>
                            </Fieldset>
                        </Form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProfilePage;
