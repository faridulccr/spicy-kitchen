const chefsLoader = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_API}/chefs`
        );
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (err) {
        return null;
    }
};

export default chefsLoader;
