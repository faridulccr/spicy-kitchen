import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Chefs from "./Chefs";

const Home = () => {
    const chefsData = useLoaderData();
    return (
        <div>
            <Banner />
            <div className="row m-0 mt-4" style={{ padding: "0 2%" }}>
                {Array.isArray(chefsData) &&
                    chefsData.length > 0 &&
                    chefsData.map((data, index) => (
                        <Chefs key={index} data={data} />
                    ))}
            </div>
        </div>
    );
};

export default Home;
