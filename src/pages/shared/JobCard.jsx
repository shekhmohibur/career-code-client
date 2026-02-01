import { Calendar, Circle, MapPin } from "lucide-react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    company_logo,
    company,
    location,
    _id,
    title,
    status,
    applicationDeadline,
    description,
    requirements
  } = job;
  return (
    <div className="w-full rounded-2xl bg-blue-50 min-h-72">
      <div className="p-3">
        <div className="heading flex justify-between items-start">
          {/* company details */}
          <div className="heading flex gap-2">
            <img
              src={company_logo}
              alt="company logo"
              className="w-12 bg-blue-200 rounded-md"
            />
            <div>
              <Link
                to={`/company-Details/${company}`}
                className="text-blue-400 font-bold"
              >
                <h3>{company}</h3>
              </Link>
              <span className="flex text-gray-400 text-xs">
                <MapPin size={15} />
                {location}
              </span>
            </div>
          </div>
          <div title={status === "active" ? "available" : "Not-Available"}>
            <Circle
              className="bg-green-400 rounded-full text-white"
              size={17}
            />
          </div>
        </div>
        {/* job details */}
        <div className="mt-3">
          <Link
            to={`/job-Details/${_id}`}
            className="text-2xl font-semibold hover:text-blue-500 transition-all duration-300"
          >
            <h2>{title}</h2>
          </Link>
          <div className="flex gap-1 items-center font-semibold text-black/50">
            <span>Deadline :</span>
            <span className="flex gap-1 items-center text-xs font-semibold">
              <Calendar size={16} />
              {applicationDeadline}
            </span>
          </div>
        </div>
        {/* description */}
        <div className="mt-3">
          <p className="text-black/50 font-semibold line-clamp-3">{description}</p>
        </div>
        {/* requirements */}
        <div className="mt-3 flex gap-2 flex-wrap">
            {
            requirements?.map((req, index) => <span className="px-2 py-1 bg-blue-100 rounded-lg hover:text-blue-400 cursor-pointer text-sm text-black/50 font-semibold" key={index}>{req}</span>)
            }
        </div>
        {/* card actions */}
        <div className="mt-5 flex justify-end">
          <Link
            to={`/job-Details/${_id}`}
            className="btn bg-blue-100 text-blue-500 hover:bg-blue-600 hover:text-white border-none"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
