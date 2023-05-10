import { useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

function ErrorPage() {
    useTitle("error");
    const error = useRouteError();
    console.error(error);

    return (
        <div
            className="container vh-100 d-flex justify-content-center align-items-center"
            id="error-page"
        >
            <div>
                <h1>Oops!</h1>
                <p>Sorry, 404 error has occurred.</p>
                <p>
                    <i className="fw-bold fs-3">
                        {error.statusText || error.message}
                    </i>
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;
