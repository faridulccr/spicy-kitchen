import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Chefs = ({ data }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState();

    const viewDetails = () => {
        setLoading(true);
        navigate(`/recipes/${data.id}`);
    };
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-2 mb-3">
            <div
                className="border rounded-3 p-3 bg-dark"
                style={{ height: "620px", overflow: "auto" }}
            >
                <div>
                    <LazyLoadImage height={250} src={data.image} alt="" />
                </div>
                <div className="mt-3">
                    <h2 className="text-white fw-bold">{data.name}</h2>
                    <p className="text-primary">
                        Experience: {data.experience} years
                    </p>
                    <p className="text-white">{data.bio}</p>
                    <p className="text-white">
                        Number of recipes: {data.numRecipes}
                    </p>
                    <p className="text-warning">likes: {data.likes}</p>
                </div>
                <div>
                    <button
                        onClick={viewDetails}
                        disabled={loading}
                        className="btn btn-primary d-block mx-auto w-75 py-3 rounded-3"
                    >
                        {loading && <Spinner />}
                        {!loading && "View Recipes"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chefs;
