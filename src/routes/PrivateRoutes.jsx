import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/shared/Loader';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
    if (!user) {
    return (
      <Navigate
        to="/signin"
        state={{ from: location }}
        replace
      />
    );
  }
  return children;
};

export default PrivateRoutes;
