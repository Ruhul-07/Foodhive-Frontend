import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
  
    if (loading) {
      return <div>Loading...</div>;
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