import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

function VehiclesPage() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editingVehicle, setEditingVehicle] = useState(null);
    const [formData, setFormData] = useState({
        make: "",
        model: "",
        year: "",
        vin: "",
        customer_id: "",
    });

    // Fake customer data for dropdown
    const fakeCustomers = [
        { id: 1, name: "Acme Corporation" },
        { id: 2, name: "Tech Solutions Inc" },
        { id: 3, name: "Retail Plus Group" },
        { id: 4, name: "Urban Living LLC" },
        { id: 5, name: "Grand Hotels Group" },
        { id: 6, name: "Food Chain Enterprises" },
        { id: 7, name: "Health Services Network" },
        { id: 8, name: "Education District" },
        { id: 9, name: "Manufacturing Co" },
        { id: 10, name: "Real Estate Partners" },
    ];

    // Fake vehicle data
    const fakeVehicles = [
        {
            id: 1,
            make: "Toyota",
            model: "Camry",
            year: 2020,
            vin: "1HGBH41JXMN109186",
            customer_id: 1,
            customer_name: "Acme Corporation",
            registration_date: "2020-01-15",
            status: "active",
        },
        {
            id: 2,
            make: "Honda",
            model: "Civic",
            year: 2021,
            vin: "2HGBH41JXMN109187",
            customer_id: 2,
            customer_name: "Tech Solutions Inc",
            registration_date: "2021-03-20",
            status: "active",
        },
        {
            id: 3,
            make: "Ford",
            model: "F-150",
            year: 2019,
            vin: "1FTFW1E5XKFA12345",
            customer_id: 3,
            customer_name: "Retail Plus Group",
            registration_date: "2019-06-10",
            status: "active",
        },
        {
            id: 4,
            make: "Chevrolet",
            model: "Silverado",
            year: 2022,
            vin: "1GCVKREC1NZ123456",
            customer_id: 4,
            customer_name: "Urban Living LLC",
            registration_date: "2022-05-12",
            status: "active",
        },
        {
            id: 5,
            make: "Ram",
            model: "1500",
            year: 2021,
            vin: "1C6RR7FTXMS123789",
            customer_id: 5,
            customer_name: "Grand Hotels Group",
            registration_date: "2021-08-22",
            status: "active",
        },
        {
            id: 6,
            make: "Toyota",
            model: "Tacoma",
            year: 2020,
            vin: "5TFRZ5BN0LX123456",
            customer_id: 6,
            customer_name: "Food Chain Enterprises",
            registration_date: "2020-09-05",
            status: "active",
        },
        {
            id: 7,
            make: "Nissan",
            model: "Altima",
            year: 2023,
            vin: "1N4BL4CV2NC123456",
            customer_id: 7,
            customer_name: "Health Services Network",
            registration_date: "2023-02-18",
            status: "active",
        },
        {
            id: 8,
            make: "GMC",
            model: "Sierra",
            year: 2018,
            vin: "1GT49CEY8JF123456",
            customer_id: 8,
            customer_name: "Education District",
            registration_date: "2018-12-03",
            status: "active",
        },
        {
            id: 9,
            make: "Chevrolet",
            model: "Equinox",
            year: 2022,
            vin: "KL1TD56E2NB123456",
            customer_id: 9,
            customer_name: "Manufacturing Co",
            registration_date: "2022-10-15",
            status: "inactive",
        },
        {
            id: 10,
            make: "Toyota",
            model: "RAV4",
            year: 2023,
            vin: "JTMB0RFV0PD123456",
            customer_id: 10,
            customer_name: "Real Estate Partners",
            registration_date: "2023-06-30",
            status: "active",
        },
        {
            id: 11,
            make: "Ford",
            model: "Transit",
            year: 2021,
            vin: "1FTBR2CM5MKA12345",
            customer_id: 1,
            customer_name: "Acme Corporation",
            registration_date: "2021-04-15",
            status: "active",
        },
        {
            id: 12,
            make: "Mercedes-Benz",
            model: "Sprinter",
            year: 2022,
            vin: "WD3PE7EB9N5123456",
            customer_id: 3,
            customer_name: "Retail Plus Group",
            registration_date: "2022-07-22",
            status: "active",
        },
        {
            id: 13,
            make: "Honda",
            model: "Pilot",
            year: 2020,
            vin: "5FNYF5H13LB123456",
            customer_id: 5,
            customer_name: "Grand Hotels Group",
            registration_date: "2020-11-10",
            status: "active",
        },
        {
            id: 14,
            make: "Toyota",
            model: "Sienna",
            year: 2023,
            vin: "5TDDK3DC7PS123456",
            customer_id: 7,
            customer_name: "Health Services Network",
            registration_date: "2023-01-28",
            status: "active",
        },
        {
            id: 15,
            make: "Ford",
            model: "Escape",
            year: 2019,
            vin: "1FMCU9GD0KUA12345",
            customer_id: 2,
            customer_name: "Tech Solutions Inc",
            registration_date: "2019-09-18",
            status: "inactive",
        },
    ];

    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async () => {
        setLoading(true);
        try {
            // Using fake data for now
            setVehicles(fakeVehicles);

            // Uncomment when backend is ready
            // const data = await getAllVehicles();
            // setVehicles(data);
        } catch (error) {
            console.error("Error loading vehicles:", error);
            setVehicles(fakeVehicles); // Fallback to fake data
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "customer_id" ? parseInt(value) || "" : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editingVehicle) {
                // Update existing vehicle
                const customer = fakeCustomers.find(
                    (c) => c.id === formData.customer_id
                );
                const updatedVehicle = {
                    ...formData,
                    id: editingVehicle.id,
                    customer_name: customer?.name || "Unknown",
                    registration_date: editingVehicle.registration_date,
                    status: editingVehicle.status,
                };
                setVehicles((prev) =>
                    prev.map((vehicle) =>
                        vehicle.id === editingVehicle.id
                            ? updatedVehicle
                            : vehicle
                    )
                );
                // await updateVehicle(editingVehicle.id, formData);
            } else {
                // Create new vehicle
                const customer = fakeCustomers.find(
                    (c) => c.id === formData.customer_id
                );
                const newVehicle = {
                    ...formData,
                    id: Math.max(...vehicles.map((v) => v.id)) + 1,
                    customer_name: customer?.name || "Unknown",
                    registration_date: new Date().toISOString().split("T")[0],
                    status: "active",
                };
                setVehicles((prev) => [...prev, newVehicle]);
                // await createVehicle(formData);
            }

            resetForm();
            setShowModal(false);
        } catch (error) {
            console.error("Error saving vehicle:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (vehicle) => {
        setEditingVehicle(vehicle);
        setFormData({
            make: vehicle.make,
            model: vehicle.model,
            year: vehicle.year,
            vin: vehicle.vin,
            customer_id: vehicle.customer_id,
        });
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            try {
                setVehicles((prev) =>
                    prev.filter((vehicle) => vehicle.id !== id)
                );
                // await deleteVehicle(id);
            } catch (error) {
                console.error("Error deleting vehicle:", error);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            make: "",
            model: "",
            year: "",
            vin: "",
            customer_id: "",
        });
        setEditingVehicle(null);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        resetForm();
    };

    // Calculate statistics
    const totalVehicles = vehicles.length;
    const activeVehicles = vehicles.filter((v) => v.status === "active").length;
    const uniqueMakes = [...new Set(vehicles.map((v) => v.make))].length;
    const avgYear = (
        vehicles.reduce((sum, v) => sum + v.year, 0) / vehicles.length || 0
    ).toFixed(0);
    const currentYear = new Date().getFullYear();
    const vehiclesByMake = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.make] = (acc[vehicle.make] || 0) + 1;
        return acc;
    }, {});

    // DataGrid columns
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "make",
            headerName: "Make",
            width: 130,
            editable: true,
        },
        {
            field: "model",
            headerName: "Model",
            width: 150,
            editable: true,
        },
        {
            field: "year",
            headerName: "Year",
            type: "number",
            width: 100,
            renderCell: (params) => {
                const age = currentYear - params.value;
                return (
                    <div>
                        <span className="font-semibold">{params.value}</span>
                        <span className="text-xs text-gray-500 ml-2">
                            ({age} years)
                        </span>
                    </div>
                );
            },
        },
        {
            field: "vin",
            headerName: "VIN",
            width: 200,
            editable: true,
        },
        {
            field: "customer_name",
            headerName: "Customer",
            width: 200,
            renderCell: (params) => (
                <span className="font-medium">{params.value}</span>
            ),
        },
        {
            field: "registration_date",
            headerName: "Registered",
            width: 130,
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
                        Vehicle Management
                    </h1>
                    <p className="text-base-content/70">
                        Track and manage customer vehicles, registrations, and
                        vehicle information
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Total Vehicles
                            </h2>
                            <p className="text-3xl font-bold">
                                {totalVehicles}
                            </p>
                            <p className="text-xs text-success">
                                {activeVehicles} active
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Unique Makes
                            </h2>
                            <p className="text-3xl font-bold">{uniqueMakes}</p>
                            <p className="text-xs text-info">
                                Different manufacturers
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">
                                Average Year
                            </h2>
                            <p className="text-3xl font-bold">{avgYear}</p>
                            <p className="text-xs text-info">
                                Model year average
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
                                    (activeVehicles / totalVehicles) *
                                    100
                                ).toFixed(0)}
                                %
                            </p>
                            <p className="text-xs text-success">
                                Active vehicles
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vehicles by Make */}
                <div className="card bg-base-100 shadow-md mb-6">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">
                            Vehicles by Make
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {Object.entries(vehiclesByMake)
                                .sort((a, b) => b[1] - a[1])
                                .map(([make, count]) => (
                                    <div
                                        key={make}
                                        className="stat bg-base-200 rounded-lg p-4"
                                    >
                                        <div className="stat-title text-xs">
                                            {make}
                                        </div>
                                        <div className="stat-value text-2xl">
                                            {count}
                                        </div>
                                        <div className="stat-desc text-xs">
                                            vehicles
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="card bg-base-100 shadow-md mb-6">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-semibold">
                                    Vehicles
                                </h2>
                                <span className="badge badge-primary">
                                    {totalVehicles} total
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
                                Add Vehicle
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
                                rows={vehicles}
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
                                {editingVehicle
                                    ? "Edit Vehicle"
                                    : "Add New Vehicle"}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Make
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="make"
                                            value={formData.make}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            placeholder="Toyota, Ford, etc."
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Model
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="model"
                                            value={formData.model}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            placeholder="Camry, F-150, etc."
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Year
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="year"
                                            value={formData.year}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            placeholder="2020"
                                            min="1900"
                                            max={currentYear + 1}
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                VIN
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="vin"
                                            value={formData.vin}
                                            onChange={handleInputChange}
                                            className="input input-bordered"
                                            placeholder="1HGBH41JXMN109186"
                                            maxLength="17"
                                            required
                                        />
                                    </div>

                                    <div className="form-control md:col-span-2">
                                        <label className="label">
                                            <span className="label-text">
                                                Customer
                                            </span>
                                        </label>
                                        <select
                                            name="customer_id"
                                            value={formData.customer_id}
                                            onChange={handleInputChange}
                                            className="select select-bordered w-full"
                                            required
                                        >
                                            <option value="">
                                                Select a customer
                                            </option>
                                            {fakeCustomers.map((customer) => (
                                                <option
                                                    key={customer.id}
                                                    value={customer.id}
                                                >
                                                    {customer.name}
                                                </option>
                                            ))}
                                        </select>
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
                                        ) : editingVehicle ? (
                                            "Update Vehicle"
                                        ) : (
                                            "Add Vehicle"
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

export default VehiclesPage;
