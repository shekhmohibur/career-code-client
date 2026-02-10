import axios from "axios";
import { File } from "lucide-react";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const JobApplicants = () => {
  const { job_id } = useParams();
  const applicantsData = useLoaderData();

  const handleStatus = (e, applicantId) => {
    const selectedStatus = e.target.value;
    axios
      .patch(`${import.meta.env.VITE_server}/applications/${applicantId}`, {
        status: selectedStatus,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            position: "center",
            title: "Status Updated",
            showConfirmButton: true,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            position: "center",
            title: "Something went wrong",
            showConfirmButton: true,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-4">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto rounded-lg shadow-md">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Resume</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applicantsData?.map((applicant, index) => (
              <tr key={applicant._id || index}>
                <th>{index + 1}</th>
                <td>{applicant.applicant.fullName}</td>
                <td>
                  <a
                    href={`mailto:${applicant.applicant.email}`}
                    className="link link-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {applicant.applicant.email}
                  </a>
                </td>
                <td>
                  <Link
                    to={applicant.applicant.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-accent"
                  >
                    View Resume
                  </Link>
                </td>
                <td>
                  <select
                    onChange={(e) => handleStatus(e, applicant._id)}
                    defaultValue={applicant.status ? applicant.status : "Status"}
                    className="select select-bordered select-sm w-full"
                  >
                    <option disabled>Status</option>
                    <option>Hired</option>
                    <option>Interview</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4">
        {applicantsData?.map((applicant, index) => (
          <div
            key={applicant._id || index}
            className="card bg-base-100 shadow-md rounded-lg border border-gray-200"
          >
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <h2 className="card-title">{applicant.applicant.fullName}</h2>
                <Link
                  to={applicant.applicant.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <File />
                </Link>
              </div>

              <p className="text-sm text-gray-500">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${applicant.applicant.email}`}
                  className="link link-accent"
                >
                  {applicant.applicant.email}
                </a>
              </p>

              <div className="mt-3">
                <select
                  onChange={(e) => handleStatus(e, applicant._id)}
                  defaultValue={applicant.status ? applicant.status : "Status"}
                  className="select select-bordered w-full"
                >
                  <option disabled>Status</option>
                  <option>Hired</option>
                  <option>Interview</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplicants;
