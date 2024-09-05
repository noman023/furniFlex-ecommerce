import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AppContext);

  if (loading) {
    return <h1>Loadinng.....</h1>;
  }

  // if user exist go to children component else login
  return user ? children : <Navigate to="/login" />;
}
