import dataLocal from "../data/dataLocal.json";

const getAllTypeVideo = async (URL) => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    // &key=[YOUR_API_KEY] HTTP/1.1
    const BASE_URL = "youtube.googleapis.com/youtube/v3";
    try {
        // const data = await (
        //     await fetch(`https://${BASE_URL}/${URL}&key=${YOUTUBE_API_KEY}`)
        // ).json();
        // console.log(data);
        // if (data?.error) {
        //     return [];
        // }

        return dataLocal.items.map((e) => ({
            id: e?.id?.videoId || e?.id,
            title: e?.snippet?.title,
            imgUrl: e?.snippet?.thumbnails?.high?.url,
        }));
    } catch (error) {
        console.log("error get video", error);
        return [];
    }
};

export const getVideos = async (searchQuery) => {
    const URL = `search?part=snippet&maxResults=25&q=${searchQuery}&type=video`;
    return getAllTypeVideo(URL);
};
export const getPopularVideos = async () => {
    const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`;
    return getAllTypeVideo(URL);
};
