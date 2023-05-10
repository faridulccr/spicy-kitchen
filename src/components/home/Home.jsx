import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import CustomerTestimonials from "../CustomerTestimonials/CustomerTestimonials";
import PreBookSection from "../PreBookSection/PreBookSection";
import Banner from "../banner/Banner";
import Chefs from "./Chefs";

const Home = () => {
    useTitle("Home");
    const chefsData = useLoaderData();

    return (
        <div>
            <Banner />
            <div className="row m-0 mt-4" style={{ padding: "0 2%" }}>
                <h2 className="mt-5 text-center fw-bold mb-3">
                    Exploring the World of Chefs
                </h2>
                {Array.isArray(chefsData) &&
                    chefsData.map((data, index) => (
                        <Chefs key={index} data={data} />
                    ))}
            </div>
            <h2 className="mt-5 text-center fw-bold mb-3">
                Customer Testimonials
            </h2>
            <CustomerTestimonials />
            <h2 className="mt-5 text-center fw-bold mb-3">PreBook Section</h2>
            <PreBookSection />
        </div>
    );
};

export default Home;
