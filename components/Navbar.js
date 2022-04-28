import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useToggle from "../hooks/useToggle";
import { MagicLink } from "../lib/magic-link";
import { useRouter } from "next/router";

const Navbar = () => {
    const [dropdown, setDropdown] = useToggle();
    const [userName, setUserName] = useState("");
    const [isLogin, setIslogin] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const getName = async () => {
            try {
                const isLoggedIn = await MagicLink.user.isLoggedIn();
                const { email } = await MagicLink.user.getMetadata();
                setIslogin(isLoggedIn);
                setUserName(email);
                console.log("navbar");
            } catch {
                console.log("can not get name - error authentication");
            }
        };
        getName();
    }, []);

    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            await MagicLink.user.logout();
            router.push("/login");
        } catch {
            console.log("account not exist");
            router.push("/login");
        }
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Image
                                className="block lg:hidden"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                height={38}
                                width={38}
                                alt="Workflow"
                            />
                            <Image
                                className="hidden lg:block "
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                height={38}
                                width={38}
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="#">
                                    <a
                                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        aria-current="page"
                                    >
                                        Dashboard
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Team
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="ml-3 relative">
                            <div className="flex items-center justify-center">
                                {userName && (
                                    <p className="text-white mr-[0.625rem]">
                                        {userName}
                                    </p>
                                )}
                                <button
                                    type="button"
                                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="user-menu-button"
                                    onClick={setDropdown}
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <Image
                                        className=" rounded-full"
                                        src={
                                            userName
                                                ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                : "/1.png"
                                        }
                                        height={38}
                                        width={38}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {dropdown && (
                                <div
                                    className="cursor-pointer origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                >
                                    {isLogin ? (
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            id="user-menu-item-2"
                                            onClick={handleSignOut}
                                        >
                                            Sign out
                                        </a>
                                    ) : (
                                        <Link href="/login">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                id="user-menu-item-1"
                                            >
                                                Sign in
                                            </a>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="#">
                        <a
                            href="#"
                            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            aria-current="page"
                        >
                            Dashboard
                        </a>
                    </Link>
                    <Link href="#">
                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Team
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
