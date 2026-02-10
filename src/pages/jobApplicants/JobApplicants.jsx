import axios from "axios";
import { File } from "lucide-react";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const JobApplicants = () => {
  const { job_id } = useParams();
  console.log(job_id);
  const applicantsData = useLoaderData();
  console.log(applicantsData);
  const handleStatus = (e, applicantId) => {
    const selectedStatus = e.target.value;
    axios.patch(`${import.meta.env.VITE_server}/applications/${applicantId}`, { status: selectedStatus }).then(res => {
        if(res.data.modifiedCount){
            Swal.fire({
                icon: 'success',
                position:'center',
                title: 'Status Updated',
                showConfirmButton: true,
                timer: 1500
              })
        }else{
            Swal.fire({
                icon: 'error',
                position:'center',
                title: 'Something went wrong',
                showConfirmButton: true,
                timer: 1500
              })
        }
    })
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {applicantsData?.map((applicant, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{applicant.applicant.fullName}</td>
                <td><a href={`mailto:${applicant.applicant.email}`} target="_blank" rel="noopener noreferrer">{applicant.applicant.email}</a></td>
                <td className="hidden md:flex"><Link to={applicant.applicant.resumeLink} target="_blank" className="badge badge-accent" rel="noopener noreferrer">View Resume</Link></td>
                <td className="md:hidden"><Link to={applicant.applicant.resumeLink} target="_blank" className="" rel="noopener noreferrer"><File /></Link></td>
                <td>
                  <select
                    onChange={e => handleStatus(e, applicant._id)}
                    defaultValue={applicant.status ? applicant.status : "Status"}
                    className="select"
                  >
                    <option disabled={true}>Status</option>
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
    </div>
  );
};

export default JobApplicants;
