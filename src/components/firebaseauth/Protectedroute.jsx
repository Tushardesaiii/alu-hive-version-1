import { Navigate } from "react-router-dom";
import { auth } from "./Firebase"; // ✅ Ensure correct import from your Firebase config

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // ✅ Get the currently logged-in user

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
