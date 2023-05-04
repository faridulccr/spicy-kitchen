import React, { useState } from "react";
import { Button, Col, Row, Toast } from "react-bootstrap";
import "./RecipeCard.scss";

const RecipeCard = ({ recipe }) => {
    const { name, image, description, rating, ingredients, instructions } =
        recipe;
    const [showToast, setShowToast] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleButton = () => {
        setShowToast(true);
        setButtonDisabled(true);
    };
    return (
        <div className="mb-4 mx-3 mx-sm-0">
            <div className="my-toast-container">
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    position="static"
                >
                    <Toast.Header>
                        <strong className="mr-auto">
                            <span className="text-primary">{name}</span> added
                            to Favourite food list.
                        </strong>
                    </Toast.Header>
                    <Toast.Body className="bg-info">
                        <h3>Congratulations!</h3>
                        <p>
                            You have successfully added{" "}
                            <span className="text-white">{name}</span> in your
                            favourite recipe cart.
                        </p>
                    </Toast.Body>
                </Toast>
            </div>
            <Row className="p-3 recipe-card-container align-items-center">
                <Col className="img-container" sm={4}>
                    <img className="food-img" src={image} alt="" />
                </Col>
                <Col sm={8} className="p-2">
                    <h2 className="fw-semibold">{name}</h2>
                    <p>{description}</p>
                    <h5>Ingredients:</h5>
                    <p>
                        {ingredients.map((item, idx) => (
                            <span key={idx}>
                                {item +
                                    `${
                                        idx == ingredients.length - 1
                                            ? "."
                                            : ", "
                                    }`}
                            </span>
                        ))}
                    </p>
                    <h5>Instruction:</h5>
                    <ol>
                        {instructions.map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                    <p className="text-danger fw-bold">ratings: {rating}/5</p>
                    <Button
                        onClick={handleButton}
                        className="mb-3 w-50 mx-auto d-block text-white"
                        disabled={buttonDisabled}
                    >
                        {buttonDisabled ? "Already Added" : "Add to Favourite"}
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default RecipeCard;
