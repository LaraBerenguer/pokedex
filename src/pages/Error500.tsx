import { Link } from "react-router";

const Error500 = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="text-center">
                <p className="text-base font-semibold">500</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                    Server Error
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Sorry, something went wrong in our end.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" className="btn btn-primary">Go back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error500;