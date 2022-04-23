import { useAuth } from "../contexts/AuthContex";
import { Navigate } from "react-router-dom";

// const PublicOutlet = () => {
//   const { currentUser } = useAuth();
//   return !currentUser ? <Outlet /> : <Navigate to="/" replace />;
// };

// export default PublicOutlet;

// jodi login kora tahle r login and sign in page e jabe na
// this is my technique

const PublicOutlet = ({ Element }) => {
  const { currentUser } = useAuth();
  return !currentUser ? Element : <Navigate to="/" replace />;
};

export default PublicOutlet;
