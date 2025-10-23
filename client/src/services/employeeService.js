import axios from "axios";

const API_URL = "/api/employee";

export const getAllEmployees = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

export const getByEmployeeId = async (id) => {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
};

export const createEmployee = async (employee) => {
    const { data } = await axios.post(API_URL, employee);
    return data;
};

export const updateEmployee = async (id, employee) => {
    const { data } = await axios.put(`${API_URL}/${id}`, employee);
    return data;
};
export const deleteEmployee = async (id) => {
    const { data } = await axios.delete(`${API_URL}/${id}`);
    return data;
};
