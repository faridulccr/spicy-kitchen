const recipesLoader = async ({ params }) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_API}/chefs/${params.chefsID}`
        );
        const data = await response.json();

        if (data) {
            console.log(data);
            return data;
        } else {
            return null;
        }
    } catch (err) {
        return null;
    }
};

export default recipesLoader;
