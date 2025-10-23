import axios from "axios";
import Employees from "../components/Employees/Employees";

const API_URL = "/api/customer";

export const getAllCustomers = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

export const getCustomerById = async (id) => {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
};

export const createCustomer = async (customer) => {
    const { data } = await axios.post(API_URL, customer);
    return data;
};

export const updateCustomer = async (id, customer) => {
    const { data } = await axios.put(`${API_URL}/${id}`, customer);
    return data;
};

export const deleteCustomer = async (id) => {
    const { data } = await axios.delete(`${API_URL}/${id}`);
    return data;
};
