import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/error/NotFound";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/register/SignUp";
import HomeLayout from "../pages/home/homeLayout/HomeLayout";
import JobDetails from "../pages/jobDetails/JobDetails";
import JobApply from "../pages/jobApply/JobApply";
import PrivateRoutes from "../routes/PrivateRoutes";
import MyApplications from "../pages/myApplications/MyApplications";
import AddJob from "../pages/addJob/AddJob";
import MypostedJobs from "../pages/postedJobs/MypostedJobs";
import JobApplicants from "../pages/jobApplicants/JobApplicants";
import Loader from "../pages/shared/Loader";
import Profile from "../pages/profile/Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path:'applications/:job_id',
        element: (
          <PrivateRoutes>
            <JobApplicants/>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_server}/job/${params.job_id}`),
        hydrateFallbackElement: <Loader/>
      },
      {
        path:'addJob',
        element: (
          <PrivateRoutes>
            <AddJob />
          </PrivateRoutes>
        ),
      },
      {
        path:'profile',
        element: (
          <PrivateRoutes>
            <Profile/>
          </PrivateRoutes>
        ),
      },
      {
        path:'my-posted-jobs',
        element: (
          <PrivateRoutes>
            <MypostedJobs/>
          </PrivateRoutes>
        ),
      },
      {
        path:'my-applications',
        element: (
          <PrivateRoutes>
            <MyApplications />
          </PrivateRoutes>
        ),
      },
      {
        path: "job-Details/:id",
        element: <JobDetails />,
        loader: ({ params }) => {
          fetch(`${import.meta.env.VITE_server}/jobs/${params?.id}`);
        },
      },
      {
        path: "job-apply/:id",
        element: (
          <PrivateRoutes>
            <JobApply />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default Router;
