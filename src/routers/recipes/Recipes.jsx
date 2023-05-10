import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import useTitle from "../../hooks/useTitle";
import "./Recipes.style.scss";

const Recipes = () => {
    useTitle("Chef Details");
    const { chefData, recipeData } = useLoaderData();

    return (
        <div>
            <div className="recipe-card-font-color">
                <h2 className="text-center text-dark fw-semibold mt-3">
                    Chef Details
                </h2>
                <Container className="my-4 mx-auto">
                    <Row className="mx-1 mx-sm-0 mb-5 border chef-banner rounded-4">
                        <Col
                            sm={6}
                            className="p-3 p-sm-5 d-flex justify-content-center align-items-center"
                        >
                            <LazyLoadImage src={chefData.image} alt="" />
                        </Col>
                        <Col className="p-4 d-flex align-items-center" sm={6}>
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
                                    {chefData.experience} Years Of Experience
                                </p>
                                <p className="text-warning">
                                    Likes: {chefData.likes}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <h1 className="text-center my-3 fw-semibold">
                        Most Popular recipes of{" "}
                        <span className="text-primary">{chefData.name}</span>
                    </h1>
                    {Array.isArray(recipeData) &&
                        recipeData.map((recipe) => (
                            <RecipeCard
                                recipe={recipe}
                                key={recipe.id}
                            ></RecipeCard>
                        ))}
                </Container>
            </div>
        </div>
    );
};

export default Recipes;
