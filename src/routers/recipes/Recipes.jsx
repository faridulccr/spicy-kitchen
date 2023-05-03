import React from "react";
import { useLoaderData } from "react-router-dom";

const Recipes = () => {
    const { chefData, recipeData } = useLoaderData();

    return <div>Recipes</div>;
};

export default Recipes;
