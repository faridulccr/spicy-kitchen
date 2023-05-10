import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        // for dynamic page title
        document.title = `${title} - Spicy Kitchen`;
    }, [title]);
};

export default useTitle;
