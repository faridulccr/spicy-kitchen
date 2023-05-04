const recipesLoader = async ({ params }) => {
    const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/chefs/${params.chefsID}`
    );
    const data = await response.json();

    return data;
};

export default recipesLoader;
