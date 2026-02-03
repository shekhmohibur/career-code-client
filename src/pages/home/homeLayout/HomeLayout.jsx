import Home from "../Home";
import AllJobs from "../AllJobs";
import { Suspense } from "react";
import Loader from "../../shared/Loader";

const HomeLayout = () => {
  const jobsPromise = fetch("https://code-career-server.vercel.app/jobs").then((res) =>
    res.json(),
  );
  return (
    <div>
      <Home />
      <Suspense fallback={<Loader/>}>
        <AllJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default HomeLayout;
