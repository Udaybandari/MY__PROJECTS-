
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, allowedRoles, children }) {

  // Check whether user is logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check user role
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Allow access
  return children;
}

export default ProtectedRoute;
