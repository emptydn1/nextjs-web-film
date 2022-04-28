import Link from "next/link";
import React from "react";

const Banner = () => {
    return (
        <div
            className="bg-cover bg-center  h-[31.25rem] text-white py-24 px-24 lg:py-[150px] lg:px-[100px] object-fill"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
            }}
        >
            <div className="md:w-1/2">
                <h1 className="font-bold text-sm uppercase">introduce</h1>
                <h1 className="text-3xl lg:text-6xl font-bold mb-10 leading-none">
                    Multimedia products
                </h1>
                <Link href="#">
                    <a className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                        Play
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
