import { useState } from "react";

const useToggle = (init = false) => {
    const [state, setState] = useState(init);
    const toggle = () => {
        setState(!state);
    };

    return [state, toggle];
};

export default useToggle;
