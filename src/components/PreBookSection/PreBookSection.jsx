import React from "react";
import "./PreBookSection.css";

const PreBookSection = () => {
    return (
        <div className="prebook-section bg-img d-flex flex-column justify-content-center align-items-center text-white">
            <h2 className="text-white">Pre-Book Your Table Today</h2>
            <p className="text-white">
                We highly recommend making a reservation in advance to ensure
                your preferred date and time are available.
            </p>
            <button className="btn btn-outline-danger btn-lg mt-2 mb-5 text-white">
                Make A Reservation
            </button>
            <div className="offer-box text-center text-white">
                <h3 className="text-uppercase mb-2">Special Offer!</h3>
                <h1 className="display-4 mb-4">10% Off</h1>
                <p className="lead mb-0 text-white">
                    Use code{" "}
                    <strong className="text-warning">EPICUREAN10</strong> at
                    checkout
                </p>
            </div>
        </div>
    );
};

export default PreBookSection;
