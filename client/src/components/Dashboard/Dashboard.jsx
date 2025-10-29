import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

function Dashboard() {
    // Fake Jobs Data with prices
    const jobsData = [
        {
            id: 1,
            title: "Office Renovation",
            description: "Complete office renovation project",
            status: "active",
            price: 45000,
            customer: "Acme Corp",
            startDate: "2024-01-15",
        },
        {
            id: 2,
            title: "Warehouse Construction",
            description: "New warehouse facility build",
            status: "pending",
            price: 120000,
            customer: "Tech Solutions",
            startDate: "2024-02-01",
        },
        {
            id: 3,
            title: "Retail Store Setup",
            description: "Interior design and setup",
            status: "active",
            price: 35000,
            customer: "Retail Plus",
            startDate: "2024-01-20",
        },
        {
            id: 4,
            title: "Apartment Complex",
            description: "Multi-unit residential project",
            status: "completed",
            price: 250000,
            customer: "Urban Living",
            startDate: "2023-11-01",
        },
        {
            id: 5,
            title: "Hotel Renovation",
            description: "Luxury hotel room upgrades",
            status: "active",
            price: 85000,
            customer: "Grand Hotels",
            startDate: "2024-01-10",
        },
        {
            id: 6,
            title: "Restaurant Build",
            description: "Full restaurant construction",
            status: "pending",
            price: 65000,
            customer: "Food Chain Inc",
            startDate: "2024-03-01",
        },
        {
            id: 7,
            title: "Medical Facility",
            description: "Clinic interior setup",
            status: "active",
            price: 55000,
            customer: "Health Services",
            startDate: "2024-01-25",
        },
        {
            id: 8,
            title: "School Expansion",
            description: "Addition of new wings",
            status: "completed",
            price: 180000,
            customer: "Education District",
            startDate: "2023-09-15",
        },
    ];

    // Fake Employees Data
    const employeesData = [
        {
            id: 1,
            name: "John Doe",
            position: "Project Manager",
            hourlyWage: 45.0,
            location: "HQ",
            job: "Office Renovation",
            status: "active",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Lead Specialist",
            hourlyWage: 42.0,
            location: "HQ",
            job: "Warehouse Construction",
            status: "active",
        },
        {
            id: 3,
            name: "Mike Johnson",
            position: "Specialist",
            hourlyWage: 35.0,
            location: "Job Site",
            job: "Retail Store Setup",
            status: "active",
        },
        {
            id: 4,
            name: "Sarah Wilson",
            position: "Specialist",
            hourlyWage: 32.0,
            location: "HQ",
            job: "Apartment Complex",
            status: "active",
        },
        {
            id: 5,
            name: "David Brown",
            position: "Manager",
            hourlyWage: 48.0,
            location: "Job Site",
            job: "Hotel Renovation",
            status: "active",
        },
        {
            id: 6,
            name: "Emily Davis",
            position: "Specialist",
            hourlyWage: 30.0,
            location: "HQ",
            job: "Restaurant Build",
            status: "active",
        },
        {
            id: 7,
            name: "Alex Rodriguez",
            position: "Lead Specialist",
            hourlyWage: 40.0,
            location: "Job Site",
            job: "Medical Facility",
            status: "active",
        },
        {
            id: 8,
            name: "Lisa Chen",
            position: "Specialist",
            hourlyWage: 33.0,
            location: "HQ",
            job: "School Expansion",
            status: "inactive",
        },
    ];

    // Fake Customers Data
    const customersData = [
        {
            id: 1,
            name: "Acme Corp",
            email: "alice@acmecorp.com",
            phone: "555-0123",
            address: "123 Main St",
            jobsCount: 3,
        },
        {
            id: 2,
            name: "Tech Solutions",
            email: "bob@techsolutions.com",
            phone: "555-0456",
            address: "456 Oak Ave",
            jobsCount: 1,
        },
        {
            id: 3,
            name: "Retail Plus",
            email: "contact@retailplus.com",
            phone: "555-0789",
            address: "789 Pine St",
            jobsCount: 2,
        },
        {
            id: 4,
            name: "Urban Living",
            email: "info@urbanliving.com",
            phone: "555-0123",
            address: "321 Elm Dr",
            jobsCount: 1,
        },
        {
            id: 5,
            name: "Grand Hotels",
            email: "sales@grandhotels.com",
            phone: "555-0567",
            address: "654 Maple Ln",
            jobsCount: 2,
        },
        {
            id: 6,
            name: "Food Chain Inc",
            email: "hello@foodchain.com",
            phone: "555-0890",
            address: "987 Cedar Ave",
            jobsCount: 1,
        },
        {
            id: 7,
            name: "Health Services",
            email: "admin@healthservices.com",
            phone: "555-0345",
            address: "147 Birch Way",
            jobsCount: 1,
        },
        {
            id: 8,
            name: "Education District",
            email: "contact@edudistrict.com",
            phone: "555-0678",
            address: "258 Spruce St",
            jobsCount: 1,
        },
    ];

    // Calculate Statistics based on job prices
    const totalRevenue = jobsData.reduce((sum, job) => sum + job.price, 0);
    const activeJobsRevenue = jobsData
        .filter((job) => job.status === "active")
        .reduce((sum, job) => sum + job.price, 0);
    const completedJobsCount = jobsData.filter(
        (job) => job.status === "completed"
    ).length;
    const activeJobsCount = jobsData.filter(
        (job) => job.status === "active"
    ).length;
    const activeEmployees = employeesData.filter(
        (emp) => emp.status === "active"
    ).length;

    const revenueGrowth = ((activeJobsRevenue / totalRevenue) * 100).toFixed(1);

    // State for active tab
    const [activeTab, setActiveTab] = useState("jobs");

    // Jobs Columns
    const jobsColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "title", headerName: "Title", width: 200, editable: true },
        {
            field: "description",
            headerName: "Description",
            width: 250,
            editable: true,
        },
        {
            field: "status",
            headerName: "Status",
            width: 130,
            renderCell: (params) => {
                const status = params.value;
                const colors = {
                    active: "badge-success",
                    pending: "badge-warning",
                    completed: "badge-info",
                };
                return (
                    <span
                        className={`badge ${colors[status] || "badge-ghost"}`}
                    >
                        {status}
                    </span>
                );
            },
        },
        {
            field: "price",
            headerName: "Price",
            type: "number",
            width: 130,
            valueFormatter: (value) => `$${value?.toLocaleString()}`,
        },
        { field: "customer", headerName: "Customer", width: 150 },
        { field: "startDate", headerName: "Start Date", width: 130 },
    ];

    // Employees Columns
    const employeesColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 150, editable: true },
        {
            field: "position",
            headerName: "Position",
            width: 150,
            editable: true,
        },
        {
            field: "hourlyWage",
            headerName: "Hourly Wage",
            type: "number",
            width: 130,
            valueFormatter: (value) => `$${value?.toFixed(2)}`,
        },
        {
            field: "location",
            headerName: "Location",
            width: 120,
            renderCell: (params) => {
                const location = params.value;
                const colors = {
                    HQ: "badge-primary",
                    "Job Site": "badge-secondary",
                };
                return (
                    <span
                        className={`badge ${colors[location] || "badge-ghost"}`}
                    >
                        {location}
                    </span>
                );
            },
        },
        { field: "job", headerName: "Assigned Job", width: 180 },
        {
            field: "status",
            headerName: "Status",
            width: 100,
            renderCell: (params) => {
                const status = params.value;
                return (
                    <span
                        className={`badge ${
                            status === "active"
                                ? "badge-success"
                                : "badge-ghost"
                        }`}
                    >
                        {status}
                    </span>
                );
            },
        },
    ];

    // Customers Columns
    const customersColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "name",
            headerName: "Customer Name",
            width: 180,
            editable: true,
        },
        { field: "email", headerName: "Email", width: 200, editable: true },
        { field: "phone", headerName: "Phone", width: 130 },
        { field: "address", headerName: "Address", width: 200 },
        {
            field: "jobsCount",
            headerName: "Jobs",
            type: "number",
            width: 100,
            renderCell: (params) => (
                <span className="font-semibold">{params.value} jobs</span>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="space-y-6 w-full max-w-7xl mx-auto">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Total Revenue */}
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Total Revenue
                            </h2>
                            <p className="text-3xl font-bold">
                                ${totalRevenue.toLocaleString()}
                            </p>
                            <p className="text-xs text-success">
                                +{revenueGrowth}% from active jobs
                            </p>
                        </div>
                    </div>

                    {/* Active Jobs */}
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Active Jobs
                            </h2>
                            <p className="text-3xl font-bold">
                                {activeJobsCount}
                            </p>
                            <p className="text-xs text-success">
                                ${activeJobsRevenue.toLocaleString()} in
                                progress
                            </p>
                        </div>
                    </div>

                    {/* Completed Jobs */}
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Completed Jobs
                            </h2>
                            <p className="text-3xl font-bold">
                                {completedJobsCount}
                            </p>
                            <p className="text-xs opacity-60">
                                Successfully delivered
                            </p>
                        </div>
                    </div>

                    {/* Active Employees */}
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Active Employees
                            </h2>
                            <p className="text-3xl font-bold">
                                {activeEmployees}/{employeesData.length}
                            </p>
                            <p className="text-xs text-success">
                                Currently working
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabs for Sections */}
                <div className="tabs tabs-boxed bg-base-200">
                    <button
                        className={`tab ${
                            activeTab === "jobs" ? "tab-active" : ""
                        }`}
                        onClick={() => setActiveTab("jobs")}
                    >
                        Jobs ({jobsData.length})
                    </button>
                    <button
                        className={`tab ${
                            activeTab === "employees" ? "tab-active" : ""
                        }`}
                        onClick={() => setActiveTab("employees")}
                    >
                        Employees ({employeesData.length})
                    </button>
                    <button
                        className={`tab ${
                            activeTab === "customers" ? "tab-active" : ""
                        }`}
                        onClick={() => setActiveTab("customers")}
                    >
                        Customers ({customersData.length})
                    </button>
                </div>

                {/* Data Grids */}
                <div className="card bg-base-100 shadow-md w-full">
                    <div className="card-body p-0 w-full">
                        {activeTab === "jobs" && (
                            <div
                                style={{
                                    height: 500,
                                    width: "100%",
                                    minWidth: "800px",
                                    overflowX: "auto",
                                }}
                            >
                                <DataGrid
                                    rows={jobsData}
                                    columns={jobsColumns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                page: 0,
                                                pageSize: 10,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10, 25]}
                                    checkboxSelection
                                    disableRowSelectionOnClick
                                    sx={{
                                        border: "none",
                                        "& .MuiDataGrid-cell:focus": {
                                            outline: "none",
                                        },
                                    }}
                                />
                            </div>
                        )}

                        {activeTab === "employees" && (
                            <div
                                style={{
                                    height: 500,
                                    width: "100%",
                                    minWidth: "800px",
                                    overflowX: "auto",
                                }}
                            >
                                <DataGrid
                                    rows={employeesData}
                                    columns={employeesColumns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                page: 0,
                                                pageSize: 10,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10, 25]}
                                    checkboxSelection
                                    disableRowSelectionOnClick
                                    sx={{
                                        border: "none",
                                        "& .MuiDataGrid-cell:focus": {
                                            outline: "none",
                                        },
                                    }}
                                />
                            </div>
                        )}

                        {activeTab === "customers" && (
                            <div
                                style={{
                                    height: 500,
                                    width: "100%",
                                    minWidth: "800px",
                                    overflowX: "auto",
                                }}
                            >
                                <DataGrid
                                    rows={customersData}
                                    columns={customersColumns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                page: 0,
                                                pageSize: 10,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10, 25]}
                                    checkboxSelection
                                    disableRowSelectionOnClick
                                    sx={{
                                        border: "none",
                                        "& .MuiDataGrid-cell:focus": {
                                            outline: "none",
                                        },
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
