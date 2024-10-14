import { useEffect, useState } from "react";
import { FormInterface } from "../types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/features/userSlice";
import { RootState } from "../store/store";
import { toast, Toaster } from "sonner";

const Form = ({ title }: FormInterface) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title == "Login"){
      dispatch(addUser(formData));
    } else {
      if(formData.password !== formData.confirmPassword){
        toast.error("Passwords do not match")
      } else {
        dispatch(addUser(formData));
      }
    }
  };

  useEffect(() => {
    if (user.email) {
      navigate("/dashboard");
    }
  });

  return (
    <>
      <h1 className="text-2xl h-full text-white md:text-black font-semibold mb-4">
        {title}
      </h1>
      <Toaster richColors position="bottom-left" closeButton/>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
        <div className="flex flex-col text-white md:text-black">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="input rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-white md:text-black">
          <label htmlFor="password" className="mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="input rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>
        {title === "Sign Up" && (
          <div className="flex flex-col text-white md:text-black">
            <label htmlFor="confirm-password" className="mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Retype your password"
              required
              className="input rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-400"
              onChange={handleChange}
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2  hover:bg-blue-600"
        >
          {title}
        </button>
        {title === "Login" ? (
          <div className="mt-2 text-white md:text-black ">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </div>
        ) : (
          <div className="mt-2 text-white md:text-black">
            Already signed up?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login
            </span>
          </div>
        )}
      </form>
    </>
  );
};

export default Form;
