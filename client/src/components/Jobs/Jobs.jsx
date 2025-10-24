import { useEffect, useState } from "react";
import {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
} from "../../services/jobService";

function Jobs() {
    const [job, setJob] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {
        const data = await getAllJobs();
        setJobs(data);
    };

    return (
        <>
            <h1>Hello</h1>
        </>
    );
}

export default Jobs;
