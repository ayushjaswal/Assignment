import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProtectedRoute = ({ children }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state: RootState) => state.user.email);

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login', { state: { from: location } });
    }
  }, [loggedInUser, navigate, location]);

  return loggedInUser ? children : null;
};

export default ProtectedRoute;
