import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function Dashboard() {
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "firstName",
            headerName: "First name",
            width: 150,
            editable: true,
        },
        {
            field: "lastName",
            headerName: "Last name",
            width: 150,
            editable: true,
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            width: 110,
            editable: true,
        },
        {
            field: "fullName",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: (value, row) =>
                `${row.firstName || ""} ${row.lastName || ""}`,
        },
    ];

    const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];

    return (
        <>
            <div className="container column">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">
                            Total Employees on Today
                        </div>
                        <div className="stat-value text-primary">7/10</div>
                        <div className="stat-desc">Currently kicking ass</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Job Status</div>
                        <div className="stat-value text-secondary">4/10</div>
                        <div className="stat-desc">In progress</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H19a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Estimated Revenue</div>
                        <div className="stat-value text-accent">$2000</div>
                        <div className="stat-desc">Today</div>
                    </div>
                </div>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </>
    );
}

export default Dashboard;
