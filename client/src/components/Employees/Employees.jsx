import { useEffect, useState } from "react";
import {
    getAllEmployees,
    getByEmployeeId
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
        salary: "",
    });

    useEffect(() => {
        loadEmployees();
    }, []);

    async function loadEmployees() {
        const data = await getAllEmployees();
        setEmployees(data);
    }

    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    Employees
                </li>

                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">
                        01
                    </div>

                    <div className="list-col-grow">
                        <div>Dio Lupa</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            Remaining Reason
                        </div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg
                            className="size-[1.2em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </button>
                </li>

                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">
                        02
                    </div>
                    <div className="list-col-grow">
                        <div>Ellie Beilish</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            Bears of a fever
                        </div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg
                            className="size-[1.2em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </button>
                </li>

                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">
                        03
                    </div>
                    <div className="list-col-grow">
                        <div>Sabrino Gardener</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            Cappuccino
                        </div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg
                            className="size-[1.2em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Employees;
