import { useAuth } from "../contexts/AuthContex";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;

// jodi login kora tahle r login and sign in page e jabe na
// this is my technique
/*
const PublicRoute = ({element: Element}) => {
    const { currentUser } = useAuth();
  return !currentUser ? Element : <Navigate to="/" replace />;
};

export default PublicRoute; */
