import { use, useState } from "react";
import { deleteMyPostedJob } from "../../api/myPostedJobsApi";
import Loader from "../shared/Loader";
import { Link } from "react-router";
const PostedJobList = ({ myPostedJobs = [] }) => {
    const [jobs, setJobs] = useState(use(myPostedJobs));
    const [loading, setLoading] = useState(false);
    const handleDeleteJob = async (jobId) => {
        try {
            setLoading(true);
            await deleteMyPostedJob(jobId);
            setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
            setLoading(false);
        } catch (error) {
            console.error("Error deleting job:", error);
            setLoading(false);
        }
    };
    if (loading) {
        return <Loader />;
    }
    return (
        <div>
            <h2 className="text-center text-xl font-semibold">
                My Posted Jobs ({jobs.length})
            </h2>

            {/* ===== Desktop / Tablet Table ===== */}
            <div className="hidden md:block overflow-x-auto mt-8">
                {jobs.length > 0 ? (
                    <table className="table w-full border-collapse">
                        <thead className="bg-base-200">
                            <tr>
                                <th>Company & Job</th>
                                <th>Location</th>
                                <th>Salary Range</th>
                                <th className="text-center">Applicants</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job._id} className="hover:bg-base-100">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt={job.company}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {job.title}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {job.company}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="badge badge-ghost badge-sm">
                                            {job.location}
                                        </span>
                                    </td>

                                    <td className="font-medium">
                                        {job.salaryRange.min} - {job.salaryRange.max}
                                        <span className="uppercase text-xs text-primary ml-1">
                                            {job.salaryRange.currency}
                                        </span>
                                    </td>

                                    <td className="text-center">
                                        <Link to={`/applications/${job._id}`} className="badge badge-outline badge-info cursor-pointer hover:bg-info hover:text-white">
                                        View Applicants
                                    </Link>
                                    </td>

                                    <td className="text-center">
                                        <button onClick={() => handleDeleteJob(job._id)} className="btn btn-error btn-sm text-white">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        You haven't posted any jobs yet.
                    </div>
                )}
            </div>

            {/* ===== Mobile Card Layout ===== */}
            <div className="md:hidden mt-6 space-y-4">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div
                            key={job._id}
                            className="card bg-base-100 shadow border"
                        >
                            <div className="card-body p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-10 w-10">
                                            <img
                                                src={job.company_logo}
                                                alt={job.company}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">
                                            {job.title}
                                        </h3>
                                        <p className="text-sm opacity-60">
                                            {job.company}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 text-sm">
                                    <span className="badge badge-ghost">
                                        📍 {job.location}
                                    </span>
                                    <Link to={`/applications/${job._id}`} className="badge badge-outline badge-info cursor-pointer hover:bg-info hover:text-white">
                                        View Applicants
                                    </Link>
                                </div>

                                <div className="font-medium">
                                    💰 {job.salaryRange.min} - {job.salaryRange.max}
                                    <span className="uppercase text-xs text-primary ml-1">
                                        {job.salaryRange.currency}
                                    </span>
                                </div>

                                <button onClick={() => handleDeleteJob(job._id)} className="btn btn-error btn-sm text-white w-full">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        You haven't posted any jobs yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostedJobList;
