"use client"
import { Button, Dropdown, toast } from "@heroui/react";
import React, { Suspense } from "react";
import { Link } from "@heroui/react";
import { TiShoppingCart } from "react-icons/ti";
import NavDate from "./NavDate";
import { signOut, useSession } from "@/app/lib/auth-client";
import { IoMdArrowDown } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { useRouter } from "next/navigation";

const Navbar = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const { data: session } = useSession()
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
    const authButtons =
        <>
            {
                session?.user ?
                    <Dropdown>
                        <Button aria-label="Menu" variant="secondary" className="lg:py-6 flex items-center justify-center">
                            <h2 className="bg-green-700 text-white py-1 px-3 rounded-full text-center text-sm">
                                {session?.user.name.charAt(0)}
                            </h2>
                            <h2>
                                {session?.user.name.split(" ")[0]}
                            </h2>
                            <span>
                                <IoMdArrowDown className="" />

                            </span>
                        </Button>
                        <Dropdown.Popover>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <div className="flex flex-col text-slate-400 text-sm">
                                        <h2 className="font-semibold">
                                            {session?.user.name}
                                        </h2>
                                        <h2>
                                            {session?.user.email}
                                        </h2>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <div className="flex gap-1 items-center justify-center cursor-pointer">
                                        <IoPersonSharp className="text-blue-400 text-lg" />
                                        <Link href="/profile"> আমার প্রোফাইল</Link>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <PiSignOut className="text-red-700 text-lg" />
                                        <button onClick={handleSignOut}>সাইন আউট</button>
                                    </div>
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                    :

                    <div className="flex gap-5 items-center justify-center">
                        <Link href="/sign-in" className="hover:bg-slate-200 text-sm lg:py-2 lg:px-5">সাইন ইন</Link>
                        <Link href="/sign-up" className="bg-green-600 hover:bg-green-700 text-sm text-white py-1 px-2 lg:px-5 lg:py-2">সাইন আপ</Link>
                    </div>
            }
        </>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto max-w-7xl flex h-16 container items-center justify-between px-5 lg:px-4">
                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-3">
                        <div>
                            <TiShoppingCart className="text-4xl text-white bg-green-700 p-1 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <Link href="/" className="font-bold lg:text-xl">চলতি দর</Link>
                            <Suspense>
                                <NavDate></NavDate>
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className=" items-center gap-4 md:flex">
                    {authButtons}
                </div>
            </header>
            <div>
                {children}
            </div>
        </nav>
    );
}

export default Navbar