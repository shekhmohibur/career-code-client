import { use } from "react";
import JobCard from "../shared/JobCard";

const AllJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  console.log(jobs);
  
  return (
    <div>
      <h2 className="text-5xl uppercase text-center font-bold font-sans mb-5">
        Hot jobs today {jobs.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 mb-5">
        {
            jobs?.map((job, index) => <JobCard key={index} job={job}/>)
        }
      </div>
    </div>
  );
};

export default AllJobs;
