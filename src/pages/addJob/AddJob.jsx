import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();
  const [requirements, setRequirements] = useState([""]);
  const [responsibilities, setResponsibilities] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const salaryRange = {currency:initialData.currency, min:Number(initialData.min), max:Number(initialData.max)};
    const jobData = {
         salaryRange,
      requirements,
      responsibilities,
      ...initialData,
    };
    axios.post(`${import.meta.env.VITE_server}/jobs`, jobData)
      .then((res) => {
        if(res.data.insertedId){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Job posted successfully!',
                showConfirmButton: true,
                timer:1500
                })
        }
      })
      .catch((error) => {
        console.error("Error posting job:", error);
        Swal.fire({
            position: 'center',
          icon: "error",
          title: "Error posting job",
            showConfirmButton: true,
          timer:1500
        });
      });
  };

  const addRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const updateRequirement = (index, value) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
  };

  const removeRequirement = (index) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const addResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const updateResponsibility = (index, value) => {
    const updated = [...responsibilities];
    updated[index] = value;
    setResponsibilities(updated);
  };

  const removeResponsibility = (index) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-blue-600 py-6 px-8">
          <h2 className="text-3xl font-bold text-white text-center">
            Post a New Job
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Job Title */}
          <div className="form-control">
            <label className="label font-semibold">Job Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered focus:border-blue-500"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label font-semibold">Job Type</label>
            <select name="jobType" className="select select-bordered">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </select>
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label font-semibold">Category</label>
            <input
              type="text"
              name="category"
              className="input input-bordered"
              required
            />
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label font-semibold">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </div>

          {/* Company */}
          <div className="form-control">
            <label className="label font-semibold">Company</label>
            <input
              type="text"
              name="company"
              className="input input-bordered"
              required
            />
          </div>

          {/* Salary Range */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Salary Range</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="label text-sm">Min Salary</label>
                <input
                  type="number"
                  name="min"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label text-sm">Max Salary</label>
                <input
                  type="number"
                  name="max"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label text-sm">Currency</label>
                <select name="currency" className="select select-bordered">
                  <option value="bdt">BDT</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24"
              required
            ></textarea>
          </div>

          {/* Requirements */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Requirements</label>
            {requirements.map((req, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => updateRequirement(index, e.target.value)}
                  className="input input-bordered flex-1"
                  placeholder={`Requirement ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeRequirement(index)}
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addRequirement}
              className="btn btn-outline btn-sm"
            >
              Add Requirement
            </button>
          </div>

          {/* Responsibilities */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Responsibilities</label>
            {responsibilities.map((resp, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={resp}
                  onChange={(e) => updateResponsibility(index, e.target.value)}
                  className="input input-bordered flex-1"
                  placeholder={`Responsibility ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeResponsibility(index)}
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addResponsibility}
              className="btn btn-outline btn-sm"
            >
              Add Responsibility
            </button>
          </div>

          {/* Status */}
          <div className="form-control">
            <label className="label font-semibold">Status</label>
            <select name="status" className="select select-bordered">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label font-semibold">HR Name</label>
            <input
              type="text"
              name="hr_name"
              className="input input-bordered"
              required
            />
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label font-semibold">HR Email</label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>

          {/* Company Logo */}
          <div className="form-control">
            <label className="label font-semibold">Company Logo URL</label>
            <input
              type="url"
              name="company_logo"
              className="input input-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control md:col-span-2 mt-6">
            <button type="submit" className="btn btn-primary btn-block">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
