import Head from "next/head";
import Banner from "../components/Banner";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar";

import { getVideos, getPopularVideos } from "../lib/getVideos";

export async function getServerSideProps() {
    let disneyVideo = await getVideos("disney trailer");
    let marvelVideo = await getVideos("marvel");
    let animeVideo = await getVideos("anime");
    let popularVideo = await getPopularVideos();

    return { props: { disneyVideo, marvelVideo, animeVideo, popularVideo } };
}

export default function Home({
    disneyVideo,
    marvelVideo,
    animeVideo,
    popularVideo,
}) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <Banner />
                <div className="mt-[20px] max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="mt-10">
                        <h2 className="text-white text-4xl uppercase">anime</h2>
                        <div className="snap-x snap-mandatory grid grid-flow-col auto-cols-[30%] gap-5 py-6 overflow-x-auto overflow-y-hidden scrollbar">
                            {marvelVideo.map((e) => (
                                <Card key={e.id} {...e} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-white text-4xl uppercase">
                            disney
                        </h2>
                        <div className="snap-x snap-mandatory grid grid-flow-col auto-cols-[30%] gap-5 py-6 overflow-x-auto overflow-y-hidden scrollbar">
                            {disneyVideo.map((e) => (
                                <Card key={e.id} {...e} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-white text-4xl uppercase">
                            marvel
                        </h2>
                        <div className="snap-x snap-mandatory grid grid-flow-col auto-cols-[30%] gap-5 py-6 overflow-x-auto overflow-y-hidden scrollbar">
                            {animeVideo.map((e) => (
                                <Card key={e.id} {...e} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-white text-4xl uppercase">
                            popularVideo
                        </h2>
                        <div className="snap-x snap-mandatory grid grid-flow-col auto-cols-[30%] gap-5 py-6 overflow-x-auto overflow-y-hidden scrollbar">
                            {popularVideo.map((e) => (
                                <Card key={e.id} {...e} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
