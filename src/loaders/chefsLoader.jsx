const chefsLoader = async () => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_API}/chefs`);
    const data = await response.json();
    console.log(data);
    return data;
};

export default chefsLoader;
