import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
  
    if (loading) {
      return <LoadingSpinner></LoadingSpinner>;
    }
  
    if (!user) {
      return <Navigate to="/auth/login" state={{ from: location }} replace />;;
    }
    return (
        // <Navigate state={location?.pathname} to="/auth/login"></Navigate>
        children
    );
};

export default PrivateRoute;