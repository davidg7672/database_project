import axios from "axios";

const API_URL = "/api/job";

export const getAllJobs = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

export const getJobById = async (id) => {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
};

export const createJob = async (job) => {
    const { data } = await axios.post(API_URL, job);
    return data;
};

export const updateJob = async (id, job) => {
    const { data } = await axios.put(`${API_URL}/${id}`, job);
    return data;
};

export const deleteJob = async (id) => {
    const { data } = await axios.delete(`${API_URL}/${id}`);
    return data;
};
