import Home from "../Home";
import AllJobs from "../AllJobs";
import { Suspense } from "react";

const HomeLayout = () => {
  const jobsPromise = fetch("https://codecareerv1.onrender.com/jobs").then((res) =>
    res.json(),
  );
  return (
    <div>
      <Home />
      <Suspense fallback={<p>Loading...</p>}>
        <AllJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default HomeLayout;
