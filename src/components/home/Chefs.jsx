import React from "react";
import { useNavigate } from "react-router-dom";

const Chefs = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-2 mb-3">
            <div
                className="border rounded-3 p-3 bg-dark"
                style={{ height: "620px", overflow: "auto" }}
            >
                <div>
                    <img
                        className="rounded-3"
                        style={{ height: "250px", width: "100%" }}
                        src={data.image}
                        alt=""
                    />
                </div>
                <div className="mt-3">
                    <h2 className="text-white">{data.name}</h2>
                    <p className="text-white">{data.bio}</p>
                    <p className="text-white">
                        Number of recipes: {data.numRecipes}
                    </p>
                    <p className="text-white">
                        Experience: {data.experience} years
                    </p>
                    <p className="text-white">Rating: {data.rating}/5</p>
                </div>
                <div>
                    <button
                        onClick={() => {
                            navigate(`/recipes/${data.id}`);
                        }}
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
