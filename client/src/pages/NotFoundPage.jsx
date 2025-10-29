import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-base-content/20 mb-4">404</h1>
                <h2 className="text-4xl font-bold text-base-content mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-base-content/70 mb-8">
                    The page you're looking for doesn't exist.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/" className="btn btn-primary">
                        Go Home
                    </Link>
                    <Link to="/dashboard" className="btn btn-outline">
                        Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
