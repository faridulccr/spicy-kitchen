import React from "react";
import "./Footer.style.scss";

const Footer = () => {
    return (
        <footer className="px-5 py-4">
            <section className="row">
                <div className="col-lg-6 text-center text-lg-start text-white">
                    <p className="small mb-3 mb-lg-0 mt-1 mx-2">
                        {" "}
                        &copy; Copyright by Faridul islam{" "}
                    </p>
                </div>

                <div className="col-lg-6 text-center text-lg-end">
                    <a href="#" className="mx-2 fw-bold home">
                        {" "}
                        Home{" "}
                    </a>

                    <a
                        href="https://www.facebook.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-facebook"></i>{" "}
                    </a>
                    <a
                        href="https://www.youtube.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-youtube"></i>{" "}
                    </a>
                    <a
                        href="https://www.instagram.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-instagram"></i>{" "}
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-linkedin"></i>{" "}
                    </a>
                    <a
                        href="https://www.twitter.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-twitter"></i>{" "}
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;