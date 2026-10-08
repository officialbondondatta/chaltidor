"use client"
import React, { Suspense, useState } from "react";
import { Link, Button } from "@heroui/react";
import { TiShoppingCart } from "react-icons/ti";
import NavDate from "./NavDate";

const Navbar = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const authButtons =
        <>
            <Link href="#">Login</Link>
            <Button>Sign Up</Button>
        </>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 container items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-3">
                        <div>
                            <TiShoppingCart className="text-4xl text-white bg-green-700 p-1 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <Link href="/" className="font-bold text-xl">চলতি দর</Link>
                            <Suspense>
                                <NavDate></NavDate>
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="hidden items-center gap-4 md:flex">
                    {authButtons}
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {authButtons}
                    </ul>
                </div>
            )}
            <div>
                {children}
            </div>
        </nav>
    );
}

export default Navbar