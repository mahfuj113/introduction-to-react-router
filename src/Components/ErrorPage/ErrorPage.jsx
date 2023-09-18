import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Oops!</h1>
            <p>
                <li>{error.statusText || error.message}</li>
            </p>
            {
                error.status === 404 && <div>
                    <h3>page not found</h3>
                    <p>Go back where you from</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;