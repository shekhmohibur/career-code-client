import {
  Calendar,
  Circle,
  MapPin,
  DollarSign,
  Briefcase,
  User,
  Mail,
  Building,
} from "lucide-react";
import { use } from "react";
import { Link } from "react-router";

const SingleJob = ({ jobData }) => {
  const Data = use(jobData);
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = Data;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-20 h-20 bg-blue-200 rounded-xl"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
            <Building size={20} />
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Briefcase size={16} />
              {jobType}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              Deadline: {applicationDeadline}
            </span>
            <span
              className={`flex items-center gap-1 ${status === "active" ? "text-green-600" : "text-red-600"}`}
            >
              <Circle
                size={16}
                className={
                  status === "active" ? "fill-green-600" : "fill-red-600"
                }
              />
              {status === "active" ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      </div>

      {/* Salary Section */}
      <div className="bg-blue-50 p-4 rounded-xl mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <DollarSign size={20} />
          Salary Range
        </h2>
        <p className="text-lg font-bold text-blue-600">
          {salaryRange.currency.toUpperCase()}{" "}
          {salaryRange.min.toLocaleString()} -{" "}
          {salaryRange.max.toLocaleString()}
        </p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Job Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Requirements
        </h2>
        <div className="flex flex-wrap gap-2">
          {requirements?.map((req, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {responsibilities?.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Category</h2>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
          {category}
        </span>
      </div>

      {/* HR Contact */}
      <div className="bg-gray-50 p-4 rounded-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <User size={20} />
          Contact Information
        </h2>
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">HR Name:</span> {hr_name}
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <Mail size={16} />
            <span className="font-medium">Email:</span> {hr_email}
          </p>
        </div>
      </div>
      <Link
        to={`/job-apply/${_id}`}
        className="mt-6 w-full btn bg-blue-600 text-white hover:bg-blue-700 border-none"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default SingleJob;
