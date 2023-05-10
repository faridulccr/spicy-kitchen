import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import "./Chef.style.scss";

const Chefs = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-2 mb-3">
            <div className="chef-card border rounded-3 p-3 bg-dark">
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
                        onClick={() => navigate(`/recipes/${data.id}`)}
                        className="btn btn-primary d-block mx-auto w-75 py-3 rounded-3"
                    >
                        View Recipes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chefs;
