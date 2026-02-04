import { useState } from "react";
import { User, Mail, Send } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useLocation, Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
const JobApply = () => {
const {user} = useAuth();
const [isSubmitting, setIsSubmitting] = useState(false);
const location = useLocation();
const jobId = location.pathname.split("/").pop();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
      const fullName = form.fullName.value;
      const email = form.email.value;
      const resumeLink = form.resumeLink.value;
      const applicationData = {
        jobId,
        applicant: {
          fullName,
          email,
          resumeLink,
        },
      };
      axios.post('https://code-career-server.vercel.app/applications', applicationData)
      .then(res => {
        if(res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Application submitted successfully!',
            showConfirmButton: true,
            timer: 1500
          })
        }
      })
      .catch(error => {
        console.error('Error submitting application:', error);
      });

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-lg bg-white shadow-2xl border-0 animate-fade-in">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Apply for Job
            </h2>
            <p className="text-gray-600 text-md">
              {jobId}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Full Name
                </span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="fullName"
                  className="input input-bordered w-full pl-10 focus:input-primary transition-all duration-300"
                  defaultValue={user?.fullName}
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Email Address
                </span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10 focus:input-primary transition-all duration-300"
                  defaultValue={user?.email}
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Resume Link
                </span>
              </label>
              <div className="relative">
                <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="url"
                  placeholder="https://your-resume-link.com"
                  className="input input-bordered w-full pl-10 focus:input-primary transition-all duration-300"
                  required
                  name="resumeLink"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Submit Application
                </>
              )}
            </button>
            <Link to={`/job-Details/${jobId}`} className="text-sm text-gray-500 hover:text-gray-700 hover:underline mt-4 block text-center">Back to Job Details</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
