import React from "react";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <ApplicationList email={user.email} />
    </div>
  );
};

export default MyApplications;
