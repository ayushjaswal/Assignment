import { useLocation } from "react-router-dom";
import Form from "./Form";
import { FormInterface } from "../types";
import Typical from "react-typical";

const AuthPage = ({ title }: FormInterface) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className=" h-[100vh] flex md:flex-row flex-col items-center justify-center">
      <div className="bg-[#ffffff7d] p-14 rounded-md border md:border-none backdrop-blur-lg	md:flex flex-col items-center justify-center w-full">
        <Form title={title} />
      </div>
      <div className="bg-gradient w-full md:w-1/2 md:ml-auto h-[100vh] absolute md:relative z-[-1] px-12">
        <div className="hidden text-[8rem] font-semibold text-white md:flex items-center justify-center h-full">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
