import { Suspense } from "react";
import PostedJobList from "./PostedJobList";
import useAuth from '../../hooks/useAuth'
import myPostedJobsPromise from "../../api/myPostedJobsApi";
import Loader from "../shared/Loader";

const MypostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <Suspense fallback={<Loader/>}>
            <PostedJobList myPostedJobs={myPostedJobsPromise(user?.email)}/>
                </Suspense>
        </div>
    );
};

export default MypostedJobs;