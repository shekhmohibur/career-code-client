import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import Loader from "../shared/Loader";
import useApplicationApi from "../../api/useApplicationApi";

const MyApplications = () => {
  const { user } = useAuth();  
  const {ApplicationListPromise} = useApplicationApi();
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <ApplicationList ApplicationListPromise={ApplicationListPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyApplications;
