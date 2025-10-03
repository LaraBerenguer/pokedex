import { Link } from "react-router";

const Error500 = () => {
    return (
        <main className="grid min-h-full place-items-center px-6 py-14 sm:py-14 lg:px-8">
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
        </main>
    );
};

export default Error500;