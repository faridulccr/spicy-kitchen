import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../components/recipe-card/RecipeCard";

import "./Recipes.style.scss";

const Recipes = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [chefData, setChefData] = useState();
    const [recipeData, setRecipeData] = useState();
    const data = useLoaderData();

    useEffect(() => {
        if (data.chefData && data.recipeData) {
            setError(false);
            setChefData(data.chefData);
            setRecipeData(data.recipeData);
            setLoading(false);
        } else {
            setError(true);
        }
    }, [chefData, recipeData]);

    return (
        <div>
            {loading && !error && (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "400px" }}
                >
                    <Spinner />
                </div>
            )}
            {error && <h1>data not found!</h1>}
            {!loading && !error && (
                <div className="recipe-card-font-color">
                    <h2 className="text-center text-dark fw-semibold mt-3">
                        Chef Details
                    </h2>
                    <Container className="my-4 mx-auto">
                        <Row className="mx-1 mx-sm-0 mb-5 border chef-banner rounded-4">
                            <Col
                                sm={6}
                                className="p-5 d-flex align-items-center"
                            >
                                <LazyLoadImage src={chefData.image} alt="" />
                            </Col>
                            <Col
                                className="p-4 d-flex align-items-center"
                                sm={6}
                            >
                                <div>
                                    <h1 className="fw-semibold text-white">
                                        {chefData.name}
                                    </h1>
                                    <p className="text-white">
                                        {chefData.description}
                                    </p>
                                    <p className="text-white">
                                        Total recipes: {chefData.numRecipes}
                                    </p>
                                    <p className="text-primary">
                                        {chefData.experience} Years Of
                                        Experience
                                    </p>
                                    <p className="text-warning">
                                        Likes: {chefData.likes}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <h1 className="text-center my-3 fw-semibold">
                            Most Popular recipes of{" "}
                            <span className="text-primary">
                                {chefData.name}
                            </span>
                        </h1>
                        {recipeData.map((recipe) => (
                            <RecipeCard
                                recipe={recipe}
                                key={recipe.id}
                            ></RecipeCard>
                        ))}
                    </Container>
                </div>
            )}
        </div>
    );
};

export default Recipes;
