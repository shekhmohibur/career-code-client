import React, { useState, useEffect } from "react";
import {
  ApplicationListPromise,
  deleteApplication,
} from "../../api/applicationsApi";
import Loader from "../shared/Loader";
import Swal from "sweetalert2";

const ApplicationList = ({ email }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApplicationListPromise(email)
      .then((data) => {
        setApplications(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [email]);

  const handleDelete = async (id) => {
    try {
      await deleteApplication(id);
      setApplications(applications.filter((app) => app._id !== id));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Application deleted successfully!",
        showConfirmButton: true,
        timer: 1500,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error deleting application",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  if (loading) return <div className="text-center py-10"><Loader/></div>;

  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Logo</th>
              <th>Resume Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications?.map((app, index) => (
              <tr key={app._id} className="hover:bg-gray-50 transition-colors">
                <th>{index + 1}</th>
                <td className="font-semibold">{app.applicant?.fullName}</td>
                <td>{app.applicant?.email}</td>
                <td className="text-sm">{app.title}</td>
                <td className="text-sm">{app.company}</td>
                <td>
                  <img
                    src={app.company_logo}
                    alt={`${app.company} logo`}
                    className="w-8 h-8 object-contain rounded"
                  />
                </td>
                <td>
                  <a
                    href={app.applicant?.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-xs btn-outline btn-primary"
                  >
                    View Resume
                  </a>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {applications?.map((app) => (
          <div key={app._id} className="card bg-base-100 shadow-md p-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <img
                  src={app.company_logo}
                  alt={`${app.company} logo`}
                  className="w-10 h-10 object-contain rounded"
                />
                <div>
                  <h3 className="font-semibold">{app.applicant?.fullName}</h3>
                  <p className="text-sm text-gray-600">
                    {app.applicant?.email}
                  </p>
                  <p className="text-sm font-medium">{app.title}</p>
                  <p className="text-xs text-gray-500">{app.company}</p>
                  <a
                    href={app.applicant?.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-xs btn-outline btn-primary mt-2"
                  >
                    View Resume
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleDelete(app._id)}
                className="btn btn-xs btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {applications.length === 0 && (
        <div className="text-center py-10 text-gray-500 font-semibold">
          No applications found.
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
