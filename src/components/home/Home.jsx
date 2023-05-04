import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CustomerTestimonials from "../CustomerTestimonials/CustomerTestimonials";
import PreBookSection from "../PreBookSection/PreBookSection";
import Banner from "../banner/Banner";
import Chefs from "./Chefs";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const chefsData = useLoaderData();

    useEffect(() => {
        if (Array.isArray(chefsData) && chefsData.length > 0) {
            setError(false);
            setLoading(false);
        } else {
            setError(true);
        }
    }, []);
    return (
        <div>
            <Banner />
            <div className="row m-0 mt-4" style={{ padding: "0 2%" }}>
                <h2 className="mt-5 text-center fw-bold mb-3">
                    Exploring the World of Chefs
                </h2>
                {loading && !error && (
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "200px" }}
                    >
                        <Spinner />
                    </div>
                )}
                {error && <h1>data not found!</h1>}
                {!loading &&
                    !error &&
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
