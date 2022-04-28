/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "tailwindui.com",
            "images.unsplash.com",
            "www.themoviedb.org",
            "i.ytimg.com",
            "yt3.ggpht.com",
            "mdbcdn.b-cdn.net",
        ],
    },
};

module.exports = nextConfig;
