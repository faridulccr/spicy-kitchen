import React from "react";
import { Link } from "react-router-dom";
import "./Footer.style.scss";

const Footer = () => {
    return (
        <footer className="px-5 py-4">
            <section className="row">
                <div className="col-lg-6 text-center text-lg-start text-white">
                    <p className="small mb-3 mb-lg-0 mt-1 mx-2">
                        {" "}
                        &copy; Copyright by{" "}
                        <span
                            className="fw-semibold"
                            style={{ color: "rgba(5, 121, 141, 0.836)" }}
                        >
                            Spicy Kitchen
                        </span>{" "}
                    </p>
                </div>

                <div className="col-lg-6 text-center text-lg-end">
                    <Link to="/" className="mx-2 fw-bold home">
                        {" "}
                        Home{" "}
                    </Link>

                    <Link
                        to="https://www.facebook.com"
                        className="mx-2"
                        target="_blank"
                        title="facebook"
                    >
                        {" "}
                        <i
                            className="fab fa-facebook"
                            style={{ color: "#3b5998" }}
                        ></i>{" "}
                    </Link>
                    <Link
                        to="https://www.youtube.com"
                        className="mx-2"
                        target="_blank"
                        title="youtube"
                    >
                        {" "}
                        <i
                            className="fab fa-youtube"
                            style={{ color: "#FF0000" }}
                        ></i>{" "}
                    </Link>
                    <Link
                        to="https://www.instagram.com"
                        className="mx-2"
                        target="_blank"
                        title="instagram"
                    >
                        {" "}
                        <i
                            className="fab fa-instagram"
                            style={{ color: "#feda75" }}
                        ></i>{" "}
                    </Link>
                    <Link
                        to="https://www.linkedin.com"
                        className="mx-2"
                        target="_blank"
                        title="linkedin"
                    >
                        {" "}
                        <i
                            className="fab fa-linkedin"
                            style={{ color: "#0072b1" }}
                        ></i>{" "}
                    </Link>
                    <Link
                        to="https://www.twitter.com"
                        className="mx-2"
                        target="_blank"
                        title="twitter"
                    >
                        {" "}
                        <i
                            className="fab fa-twitter"
                            style={{ color: "#00acee" }}
                        ></i>{" "}
                    </Link>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
