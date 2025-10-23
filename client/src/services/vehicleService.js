import axios from "axios";

const API_URL = "/api/vehicle";

export const getAllVehicles = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

export const getVehicleById = async (id) => {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
};

export const createVehicle = async (vehicle) => {
    const { data } = await axios.post(API_URL, vehicle);
    return data;
};

export const updateVehicle = async (id, vehicle) => {
    const { data } = await axios.put(`${API_URL}/${id}`, vehicle);
    return data;
};

export const deleteVehicle = async (id) => {
    const { data } = axios.delete(`${API_URL}/${id}`);
    return data;
};
