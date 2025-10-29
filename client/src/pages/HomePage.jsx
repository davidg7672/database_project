import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto p-6">
                <h1 className="text-6xl font-bold text-base-content mb-6">
                    Welcome to Moving Company
                </h1>
                <p className="text-xl text-base-content/70 mb-8">
                    Your comprehensive solution for managing employees, jobs,
                    and customers
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body text-center">
                            <div className="text-4xl mb-4">👥</div>
                            <h2 className="card-title justify-center">
                                Employee Management
                            </h2>
                            <p className="text-sm opacity-70">
                                Manage your team members, their roles, and
                                assignments
                            </p>
                            <div className="card-actions justify-center mt-4">
                                <Link
                                    to="/employees"
                                    className="btn btn-primary"
                                >
                                    Manage Employees
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body text-center">
                            <div className="text-4xl mb-4">📊</div>
                            <h2 className="card-title justify-center">
                                Dashboard
                            </h2>
                            <p className="text-sm opacity-70">
                                View comprehensive statistics and analytics
                            </p>
                            <div className="card-actions justify-center mt-4">
                                <Link
                                    to="/dashboard"
                                    className="btn btn-primary"
                                >
                                    View Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body text-center">
                            <div className="text-4xl mb-4">🚚</div>
                            <h2 className="card-title justify-center">
                                Job Management
                            </h2>
                            <p className="text-sm opacity-70">
                                Track and manage all your moving jobs
                            </p>
                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-primary" disabled>
                                    Coming Soon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                    <Link to="/dashboard" className="btn btn-lg btn-primary">
                        Get Started
                    </Link>
                    <Link to="/employees" className="btn btn-lg btn-outline">
                        Manage Team
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
