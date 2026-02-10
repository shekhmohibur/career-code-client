import React, { Suspense } from "react";
import {useParams } from "react-router";
import SingleJob from "./SingleJob";
import Loader from "../shared/Loader";

const JobDetails = () => {
  const { id } = useParams();
  const singleJobPromise = fetch(`${import.meta.env.VITE_server}/jobs/${id}`).then(
    (res) => res.json()
  );
  return <div>
    <Suspense fallback={<Loader/>}>
        <SingleJob jobData={singleJobPromise}/>
    </Suspense>
  </div>;
};

export default JobDetails;
