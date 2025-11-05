import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

function CustomersPage() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    // Fake customer data
    const fakeCustomers = [
        {
            id: 1,
            name: "Acme Corporation",
            email: "contact@acmecorp.com",
            phone: "555-0101",
            address: "123 Business Park Dr, Seattle, WA 98101",
            jobsCount: 5,
            totalSpent: 125000,
            status: "active",
            joinDate: "2022-01-15",
        },
        {
            id: 2,
            name: "Tech Solutions Inc",
            email: "sales@techsolutions.com",
            phone: "555-0102",
            address: "456 Innovation Blvd, Portland, OR 97201",
            jobsCount: 3,
            totalSpent: 85000,
            status: "active",
            joinDate: "2022-03-20",
        },
        {
            id: 3,
            name: "Retail Plus Group",
            email: "info@retailplus.com",
            phone: "555-0103",
            address: "789 Commerce St, Spokane, WA 99201",
            jobsCount: 8,
            totalSpent: 195000,
            status: "active",
            joinDate: "2021-11-10",
        },
        {
            id: 4,
            name: "Urban Living LLC",
            email: "hello@urbanliving.com",
            phone: "555-0104",
            address: "321 Downtown Ave, Tacoma, WA 98401",
            jobsCount: 2,
            totalSpent: 65000,
            status: "active",
            joinDate: "2023-05-12",
        },
        {
            id: 5,
            name: "Grand Hotels Group",
            email: "bookings@grandhotels.com",
            phone: "555-0105",
            address: "654 Hospitality Lane, Bellevue, WA 98004",
            jobsCount: 12,
            totalSpent: 285000,
            status: "active",
            joinDate: "2021-08-22",
        },
        {
            id: 6,
            name: "Food Chain Enterprises",
            email: "contact@foodchain.com",
            phone: "555-0106",
            address: "987 Restaurant Row, Everett, WA 98201",
            jobsCount: 4,
            totalSpent: 95000,
            status: "active",
            joinDate: "2022-09-05",
        },
        {
            id: 7,
            name: "Health Services Network",
            email: "admin@healthservices.com",
            phone: "555-0107",
            address: "147 Medical Center Dr, Renton, WA 98057",
            jobsCount: 6,
            totalSpent: 145000,
            status: "active",
            joinDate: "2022-02-18",
        },
        {
            id: 8,
            name: "Education District",
            email: "info@edudistrict.com",
            phone: "555-0108",
            address: "258 School Way, Kent, WA 98032",
            jobsCount: 7,
            totalSpent: 175000,
            status: "active",
            joinDate: "2021-12-03",
        },
        {
            id: 9,
            name: "Manufacturing Co",
            email: "sales@mfgco.com",
            phone: "555-0109",
            address: "741 Industrial Park, Auburn, WA 98002",
            jobsCount: 1,
            totalSpent: 35000,
            status: "inactive",
            joinDate: "2023-10-15",
        },
        {
            id: 10,
            name: "Real Estate Partners",
            email: "contact@realestate.com",
            phone: "555-0110",
            address: "852 Property Blvd, Federal Way, WA 98003",
            jobsCount: 9,
            totalSpent: 225000,
            status: "active",
            joinDate: "2021-06-30",
        },
    ];

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        setLoading(true);
        try {
            // Using fake data for now
            setCustomers(fakeCustomers);

            // Uncomment when backend is ready
            // const data = await getAllCustomers();
            // setCustomers(data);
        } catch (error) {
            console.error("Error loading customers:", error);
            setCustomers(fakeCustomers); // Fallback to fake data
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
            if (editingCustomer) {
                // Update existing customer
                const updatedCustomer = {
                    ...formData,
                    id: editingCustomer.id,
                    jobsCount: editingCustomer.jobsCount,
                    totalSpent: editingCustomer.totalSpent,
                    status: editingCustomer.status,
                    joinDate: editingCustomer.joinDate,
                };
                setCustomers((prev) =>
                    prev.map((cust) =>
                        cust.id === editingCustomer.id ? updatedCustomer : cust
                    )
                );
                // await updateCustomer(editingCustomer.id, formData);
            } else {
                // Create new customer
                const newCustomer = {
                    ...formData,
                    id: Math.max(...customers.map((c) => c.id)) + 1,
                    jobsCount: 0,
                    totalSpent: 0,
                    status: "active",
                    joinDate: new Date().toISOString().split("T")[0],
                };
                setCustomers((prev) => [...prev, newCustomer]);
                // await createCustomer(formData);
            }

            resetForm();
            setShowModal(false);
        } catch (error) {
            console.error("Error saving customer:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (customer) => {
        setEditingCustomer(customer);
        setFormData({
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
        });
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            try {
                setCustomers((prev) => prev.filter((cust) => cust.id !== id));
                // await deleteCustomer(id);
            } catch (error) {
                console.error("Error deleting customer:", error);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
        });
        setEditingCustomer(null);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        resetForm();
    };

    // Calculate statistics
    const totalCustomers = customers.length;
    const activeCustomers = customers.filter(
        (c) => c.status === "active"
    ).length;
    const totalRevenue = customers.reduce(
        (sum, cust) => sum + cust.totalSpent,
        0
    );
    const avgJobsPerCustomer = (
        customers.reduce((sum, cust) => sum + cust.jobsCount, 0) /
            customers.length || 0
    ).toFixed(1);
    const topCustomers = customers
        .sort((a, b) => b.totalSpent - a.totalSpent)
        .slice(0, 5);

    // DataGrid columns
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "name",
            headerName: "Customer Name",
            width: 200,
            editable: true,
        },
        {
            field: "email",
            headerName: "Email",
            width: 220,
            editable: true,
        },
        { field: "phone", headerName: "Phone", width: 130 },
        { field: "address", headerName: "Address", width: 300 },
        {
            field: "jobsCount",
            headerName: "Jobs",
            type: "number",
            width: 100,
            renderCell: (params) => (
                <span className="font-semibold badge badge-primary">
                    {params.value} jobs
                </span>
            ),
        },
        {
            field: "totalSpent",
            headerName: "Total Spent",
            type: "number",
            width: 140,
            valueFormatter: (value) => `$${value?.toLocaleString()}`,
        },
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
        { field: "joinDate", headerName: "Join Date", width: 130 },
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
                        Customer Management
                    </h1>
                    <p className="text-base-content/70">
                        Manage your customer relationships, track jobs, and
                        monitor spending
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Total Customers
                            </h2>
                            <p className="text-3xl font-bold">
                                {totalCustomers}
                            </p>
                            <p className="text-xs text-success">
                                {activeCustomers} active
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Total Revenue
                            </h2>
                            <p className="text-3xl font-bold">
                                ${totalRevenue.toLocaleString()}
                            </p>
                            <p className="text-xs text-success">
                                From all customers
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Avg Jobs/Customer
                            </h2>
                            <p className="text-3xl font-bold">
                                {avgJobsPerCustomer}
                            </p>
                            <p className="text-xs text-info">
                                Customer engagement
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Active Rate
                            </h2>
                            <p className="text-3xl font-bold">
                                {(
                                    (activeCustomers / totalCustomers) *
                                    100
                                ).toFixed(0)}
                                %
                            </p>
                            <p className="text-xs text-success">
                                Active customers
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top Customers */}
                <div className="card bg-base-100 shadow-md mb-6">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">
                            Top Customers by Revenue
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Customer Name</th>
                                        <th>Total Spent</th>
                                        <th>Jobs</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topCustomers.map((customer, index) => (
                                        <tr key={customer.id}>
                                            <td className="font-bold">
                                                #{index + 1}
                                            </td>
                                            <td className="font-medium">
                                                {customer.name}
                                            </td>
                                            <td className="text-success font-semibold">
                                                $
                                                {customer.totalSpent.toLocaleString()}
                                            </td>
                                            <td>
                                                <span className="badge badge-primary">
                                                    {customer.jobsCount} jobs
                                                </span>
                                            </td>
                                            <td>
                                                <span
                                                    className={`badge ${
                                                        customer.status ===
                                                        "active"
                                                            ? "badge-success"
                                                            : "badge-ghost"
                                                    }`}
                                                >
                                                    {customer.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="card bg-base-100 shadow-md mb-6">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-semibold">
                                    Customers
                                </h2>
                                <span className="badge badge-primary">
                                    {totalCustomers} total
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
                                Add Customer
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
                                rows={customers}
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
                                {editingCustomer
                                    ? "Edit Customer"
                                    : "Add New Customer"}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control md:col-span-2">
                                        <label className="label">
                                            <span className="label-text">
                                                Customer Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            placeholder="Company or individual name"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            placeholder="customer@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Phone
                                            </span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            placeholder="555-0123"
                                            required
                                        />
                                    </div>

                                    <div className="form-control md:col-span-2">
                                        <label className="label">
                                            <span className="label-text">
                                                Address
                                            </span>
                                        </label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="textarea textarea-bordered"
                                            placeholder="123 Main St, City, State ZIP"
                                            rows="3"
                                            required
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
                                        ) : editingCustomer ? (
                                            "Update Customer"
                                        ) : (
                                            "Add Customer"
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

export default CustomersPage;
