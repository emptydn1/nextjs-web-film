import { useState, useEffect } from "react";
import { MagicLink } from "../lib/magic-link";

const useCheckLoginMagic = (init = false) => {
    const [state, setState] = useState(init);

    useEffect(() => {
        const getName = async () => {
            try {
                const isLoggedIn = await MagicLink.user.isLoggedIn();
                setState(isLoggedIn);
            } catch {
                console.log("error check login");
            }
        };
        getName();
    }, []);

    return [state, setState];
};

export default useCheckLoginMagic;
