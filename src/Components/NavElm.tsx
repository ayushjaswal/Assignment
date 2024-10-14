import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const NavElm = () => {
  const { navId } = useParams();
  return (
    <div className="md:flex md:h-[100vh]">
      <NavBar />
      <div className="">
        <div className="m-3 flex rounded-md w-full items-center justify-center border-4 ">
          {navId}
        </div>
      </div>
    </div>
  );
};

export default NavElm;
