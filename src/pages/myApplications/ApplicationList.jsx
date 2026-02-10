import React, { use, useState } from "react";
import { deleteApplication } from "../../api/applicationsApi";
import Swal from "sweetalert2";
import Loader from "../shared/Loader";

const ApplicationList = ({ ApplicationListPromise }) => {
  const Data = use(ApplicationListPromise);
  const [applications, setApplications] = useState(Data);
  console.log(applications);
  
  if(applications?.length === 0){
    return <Loader/>
  }
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

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="overflow-x-auto">
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
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications?.map((app, index) => (
              <tr key={app._id} className="hover:bg-gray-50 transition-colors">
                <th>{index + 1}</th>
                <td className="font-semibold whitespace-nowrap">
                  {app.applicant?.fullName}
                </td>
                <td className="whitespace-nowrap">{app.applicant?.email}</td>
                <td className="text-sm whitespace-nowrap">{app.title}</td>
                <td className="text-sm whitespace-nowrap">{app.company}</td>
                <td>
                  <img
                    src={app.company_logo}
                    alt={`${app.company} logo`}
                    className="w-8 h-8 object-contain rounded"
                  />
                </td>
                <td className="whitespace-nowrap">
                  <a
                    href={app.applicant?.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-xs btn-outline btn-primary"
                  >
                    View Resume
                  </a>
                </td>
                <td className="whitespace-nowrap">
                  <span
                    className={`${
                      app.status === "Hired"
                        ? "text-green-600"
                        : app.status === "Rejected"
                        ? "text-red-600"
                        : app.status === "Interview"
                        ? "text-blue-600"
                        : app.status === "Pending"
                        ? "text-yellow-600"
                        : "text-gray-500"
                    }`}
                  >
                    {app?.status || "Status"}
                  </span>
                </td>
                <td className="whitespace-nowrap">
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

      {applications?.length === 0 && (
        <div className="text-center py-10 text-gray-500 font-semibold">
          No applications found.
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
