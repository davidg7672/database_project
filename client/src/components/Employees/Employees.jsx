import { useEffect, useState } from "react";
import {
    getAllEmployees,
    getByEmployeeId,
    createEmployee,
    updateEmployee,
    deleteEmployee,
} from "../../services/employeeService";
import React from "react";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        position: "",
        start_date: "",
        hourly_wage: "",
    });

    useEffect(() => {
        loadEmployees();
    }, []);

    async function loadEmployees() {
        // Fake data for testing
        const fakeEmployees = [
            {
                id: 1,
                name: "John Doe",
                position: "Specialist",
                start_date: "2023-01-15",
                location_status: "hq",
                job: "Job 2",
                hourly_wage: 75000,
            },
            {
                id: 2,
                name: "Jane Smith",
                position: "Project Manager",
                start_date: "2022-06-01",
                location_status: "hq",
                job: "Job 1",
                hourly_wage: 85000,
            },
            {
                id: 3,
                name: "Mike Johnson",
                position: "Specialist",
                start_date: "2023-03-10",
                location_status: "hq",
                job: "Job 1",
                hourly_wage: 70000,
            },
            {
                id: 4,
                name: "Sarah Wilson",
                position: "Specialist",
                start_date: "2023-05-20",
                location_status: "hq",
                job: "Job 1",
                hourly_wage: 68000,
            },
            {
                id: 5,
                name: "David Brown",
                position: "Specialist",
                start_date: "2022-11-10",
                location_status: "hq",
                job: "Job 1",
                hourly_wage: 82000,
            },
            {
                id: 6,
                name: "Emily Davis",
                position: "Specialist",
                start_date: "2023-07-05",
                location_status: "job1",
                job: "Job 1",
                hourly_wage: 65000,
            },
            {
                id: 7,
                name: "Alex Rodriguez",
                position: "Manager",
                start_date: "2023-02-14",
                location_status: "hq",
                job: "Job 1",
                hourly_wage: 78000,
            },
        ];

        console.log("Loading fake employees:", fakeEmployees);
        setEmployees(fakeEmployees);

        // Uncomment below if you want to try the API later
        /*
        try {
            const data = await getAllEmployees();
            console.log("API Response:", data);
            // Check if data is an array
            if (Array.isArray(data)) {
                setEmployees(data);
            } else {
                console.error("API returned non-array data:", data);
                setEmployees(fakeEmployees); // Use fake data as fallback
            }
        } catch (error) {
            console.error("Error loading employees:", error);
            setEmployees(fakeEmployees); // Use fake data on error
        }
        */
    }

    return (
        <>
            <div className="bg-base-100 rounded-box shadow-md">
                <div className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    Employees ({employees.length})
                </div>

                <div className="max-h-96 overflow-y-auto">
                    <ul className="list">
                        {employees.length === 0 ? (
                            <li className="p-4 text-center opacity-60">
                                No employees found. Add some employees to see
                                them here!
                            </li>
                        ) : (
                            employees.map((employee, index) => (
                                <li key={employee.id} className="list-row">
                                    <div className="text-4xl font-thin opacity-30 tabular-nums">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="list-col-grow">
                                        <div>{employee.name}</div>
                                        <div className="text-xs uppercase font-semibold opacity-60">
                                            {employee.position}
                                        </div>
                                        <div className="text-xs opacity-50">
                                            Hourly: ${employee.hourly_wage} |
                                            Location: {employee.location_status}{" "}
                                            | {employee.job}
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-square btn-ghost"
                                        onClick={() =>
                                            console.log(
                                                "Edit employee:",
                                                employee.id
                                            )
                                        }
                                    ></button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Employees;
