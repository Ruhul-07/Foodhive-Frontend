import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (user) {
      return children;
    }
    return (
        <Navigate state={location?.pathname} to="/auth/login"></Navigate>
    );
};

export default PrivateRoute;