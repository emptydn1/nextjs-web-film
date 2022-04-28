import { Magic } from "magic-sdk";

// server don't have object window, have to check window exist on client must execute
export const MagicLink =
    typeof window !== "undefined" &&
    new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY);
