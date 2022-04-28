import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Card = ({ imgUrl = "/1.png", title, id }) => {
    const [srcImg, setSrcImg] = useState(imgUrl);
    const handleOnError = () => {
        setSrcImg("/1.png");
    };
    return (
        <Link href={`/video/${id}`} passHref>
            <div className="cursor-pointer snap-start pb-6 sm:pb-12">
                <div className="py-3 sm:max-w-xl">
                    <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8 duration-100 hover:bg-slate-300">
                        <div className="relative h-[350px] overflow-visible w-1/2 ">
                            <Image
                                className="rounded-3xl shadow-lg"
                                src={srcImg}
                                alt=""
                                onError={handleOnError}
                                layout="fill"
                            />
                        </div>
                        <div className="flex flex-col w-1/2 space-y-4">
                            <div className="flex justify-between items-start">
                                <h2 className="text-sm font-bold">{title}</h2>
                                <div className="bg-yellow-400 font-bold rounded-xl p-2">
                                    7.2
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">
                                    Series
                                </div>
                                <div className="text-lg text-gray-800">
                                    2019
                                </div>
                            </div>
                            <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex text-2xl font-bold text-a">
                                $83.90
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
