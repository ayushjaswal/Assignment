import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeUser } from "../store/features/userSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div className="flex md:w-1/6  bg-white shadow-lg p-2">
      <nav className="flex md:flex-col gap-2 w-full justify-between">
        <div className="flex  md:flex-col gap-2">
          <div
            onClick={() => navigate("/dashboard")}
            className={`nav-elm ${
              location.pathname.includes("dashboard") ? " active " : ""
            }`}
          >
            Dashboard
          </div>
          <div
            onClick={() => navigate("/nav-elm1")}
            className={`nav-elm ${
              location.pathname.includes("nav-elm1") ? " active " : ""
            }`}
          >
            Nav elem1
          </div>
          <div
            onClick={() => navigate("/nav-elm2")}
            className={`nav-elm ${
              location.pathname.includes("nav-elm2") ? " active " : ""
            }`}
          >
            Nav elem2
          </div>
          <div
            onClick={() => navigate("/nav-elm3")}
            className={`nav-elm ${
              location.pathname.includes("nav-elm3") ? " active " : ""
            }`}
          >
            Nav elem3
          </div>
        </div>
        <div
          onClick={handleLogout}
          className="p-2 rounded-md text-center bg-black text-white cursor-pointer"
        >
          Logout
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
