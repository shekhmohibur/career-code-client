import Home from "../Home";
import AllJobs from "../AllJobs";
import { Suspense, useEffect, useState } from "react";
import Loader from "../../shared/Loader";
const HomeLayout = () => {
  const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
  fetch(`${import.meta.env.VITE_server}/jobs`, {
    credentials: "include",
  })
    .then(async (res) => {
      if (!res.ok) throw new Error("Failed to fetch jobs");
      return res.json();
    })
    .then((data) => {
      setJobs(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);
  return (
    <div>
      <Home loading={loading} error={error} />
      <Suspense fallback={<Loader />}>
        <AllJobs jobs={jobs} loading={loading} error={error} />
      </Suspense>
    </div>
  );
};

export default HomeLayout;
