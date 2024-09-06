import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }

  // if user exist go to children component else login
  return user ? children : <Navigate to="/login" />;
}
