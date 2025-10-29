import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
    getAllEmployees,
    getByEmployeeId,
    createEmployee,
    updateEmployee,
    deleteEmployee,
} from "../services/employeeService";

function EmployeesPage() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        start_date: "",
        hourly_wage: "",
        location_status: "hq",
        job: "",
    });

    // Fake data for development
    const fakeEmployees = [
        {
            id: 1,
            name: "John Doe",
            position: "Project Manager",
            start_date: "2023-01-15",
            location_status: "hq",
            job: "Office Renovation",
            hourly_wage: 45.0,
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Lead Specialist",
            start_date: "2022-06-01",
            location_status: "hq",
            job: "Warehouse Construction",
            hourly_wage: 42.0,
        },
        {
            id: 3,
            name: "Mike Johnson",
            position: "Specialist",
            start_date: "2023-03-10",
            location_status: "job_site",
            job: "Retail Store Setup",
            hourly_wage: 35.0,
        },
        {
            id: 4,
            name: "Sarah Wilson",
            position: "Specialist",
            start_date: "2023-05-20",
            location_status: "hq",
            job: "Apartment Complex",
            hourly_wage: 32.0,
        },
        {
            id: 5,
            name: "David Brown",
            position: "Manager",
            start_date: "2022-11-10",
            location_status: "job_site",
            job: "Hotel Renovation",
            hourly_wage: 48.0,
        },
        {
            id: 6,
            name: "Emily Davis",
            position: "Specialist",
            start_date: "2023-07-05",
            location_status: "hq",
            job: "Restaurant Build",
            hourly_wage: 30.0,
        },
        {
            id: 7,
            name: "Alex Rodriguez",
            position: "Lead Specialist",
            start_date: "2023-02-14",
            location_status: "job_site",
            job: "Medical Facility",
            hourly_wage: 40.0,
        },
        {
            id: 8,
            name: "Lisa Chen",
            position: "Specialist",
            start_date: "2023-08-20",
            location_status: "hq",
            job: "School Expansion",
            hourly_wage: 33.0,
        },
    ];

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        setLoading(true);
        try {
            // Using fake data for now
            setEmployees(fakeEmployees);

            // Uncomment when backend is ready
            // const data = await getAllEmployees();
            // setEmployees(data);
        } catch (error) {
            console.error("Error loading employees:", error);
            setEmployees(fakeEmployees); // Fallback to fake data
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editingEmployee) {
                // Update existing employee
                const updatedEmployee = { ...formData, id: editingEmployee.id };
                setEmployees((prev) =>
                    prev.map((emp) =>
                        emp.id === editingEmployee.id ? updatedEmployee : emp
                    )
                );
                // await updateEmployee(editingEmployee.id, formData);
            } else {
                // Create new employee
                const newEmployee = {
                    ...formData,
                    id: Math.max(...employees.map((e) => e.id)) + 1,
                };
                setEmployees((prev) => [...prev, newEmployee]);
                // await createEmployee(formData);
            }

            resetForm();
            setShowModal(false);
        } catch (error) {
            console.error("Error saving employee:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (employee) => {
        setEditingEmployee(employee);
        setFormData({
            name: employee.name,
            position: employee.position,
            start_date: employee.start_date,
            hourly_wage: employee.hourly_wage,
            location_status: employee.location_status,
            job: employee.job,
        });
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            try {
                setEmployees((prev) => prev.filter((emp) => emp.id !== id));
                // await deleteEmployee(id);
            } catch (error) {
                console.error("Error deleting employee:", error);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            position: "",
            start_date: "",
            hourly_wage: "",
            location_status: "hq",
            job: "",
        });
        setEditingEmployee(null);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        resetForm();
    };

    // DataGrid columns
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "name",
            headerName: "Name",
            width: 180,
            editable: true,
        },
        {
            field: "position",
            headerName: "Position",
            width: 180,
            editable: true,
        },
        {
            field: "hourly_wage",
            headerName: "Hourly Wage",
            type: "number",
            width: 130,
            valueFormatter: (value) => `$${value?.toFixed(2)}`,
        },
        {
            field: "location_status",
            headerName: "Location",
            width: 120,
            renderCell: (params) => {
                const location = params.value;
                const colors = {
                    hq: "badge-primary",
                    job_site: "badge-secondary",
                };
                return (
                    <span
                        className={`badge ${colors[location] || "badge-ghost"}`}
                    >
                        {location === "hq" ? "HQ" : "Job Site"}
                    </span>
                );
            },
        },
        { field: "job", headerName: "Assigned Job", width: 200 },
        { field: "start_date", headerName: "Start Date", width: 130 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            sortable: false,
            renderCell: (params) => (
                <div className="flex gap-2">
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleEdit(params.row)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-base-content mb-2">
                        Employee Management
                    </h1>
                    <p className="text-base-content/70">
                        Manage your team members, their roles, and assignments
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Total Employees
                            </h2>
                            <p className="text-3xl font-bold">
                                {employees.length}
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                At HQ
                            </h2>
                            <p className="text-3xl font-bold">
                                {
                                    employees.filter(
                                        (emp) => emp.location_status === "hq"
                                    ).length
                                }
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                On Job Sites
                            </h2>
                            <p className="text-3xl font-bold">
                                {
                                    employees.filter(
                                        (emp) =>
                                            emp.location_status === "job_site"
                                    ).length
                                }
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Avg. Hourly Wage
                            </h2>
                            <p className="text-3xl font-bold">
                                $
                                {(
                                    employees.reduce(
                                        (sum, emp) => sum + emp.hourly_wage,
                                        0
                                    ) / employees.length || 0
                                ).toFixed(0)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="card bg-base-100 shadow-md mb-6">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-semibold">
                                    Employees
                                </h2>
                                <span className="badge badge-primary">
                                    {employees.length} total
                                </span>
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowModal(true)}
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add Employee
                            </button>
                        </div>
                    </div>
                </div>

                {/* Data Grid */}
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body p-0">
                        <div
                            style={{
                                height: 600,
                                width: "100%",
                                minWidth: "800px",
                                overflowX: "auto",
                            }}
                        >
                            <DataGrid
                                rows={employees}
                                columns={columns}
                                loading={loading}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            page: 0,
                                            pageSize: 10,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5, 10, 25, 50]}
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
                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="modal modal-open">
                        <div className="modal-box w-11/12 max-w-2xl">
                            <h3 className="font-bold text-lg mb-4">
                                {editingEmployee
                                    ? "Edit Employee"
                                    : "Add New Employee"}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Position
                                            </span>
                                        </label>
                                        <select
                                            name="position"
                                            value={formData.position}
                                            onChange={handleInputChange}
                                            className="select select-bordered"
                                            required
                                        >
                                            <option value="">
                                                Select Position
                                            </option>
                                            <option value="Project Manager">
                                                Project Manager
                                            </option>
                                            <option value="Lead Specialist">
                                                Lead Specialist
                                            </option>
                                            <option value="Specialist">
                                                Specialist
                                            </option>
                                            <option value="Manager">
                                                Manager
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Start Date
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            name="start_date"
                                            value={formData.start_date}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Hourly Wage
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="hourly_wage"
                                            value={formData.hourly_wage}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            step="0.01"
                                            min="0"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Location Status
                                            </span>
                                        </label>
                                        <select
                                            name="location_status"
                                            value={formData.location_status}
                                            onChange={handleInputChange}
                                            className="select select-bordered"
                                            required
                                        >
                                            <option value="hq">HQ</option>
                                            <option value="job_site">
                                                Job Site
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Assigned Job
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="job"
                                            value={formData.job}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            placeholder="e.g., Office Renovation"
                                        />
                                    </div>
                                </div>

                                <div className="modal-action">
                                    <button
                                        type="button"
                                        className="btn btn-ghost"
                                        onClick={handleCloseModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="loading loading-spinner loading-sm"></span>
                                        ) : editingEmployee ? (
                                            "Update Employee"
                                        ) : (
                                            "Add Employee"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmployeesPage;
