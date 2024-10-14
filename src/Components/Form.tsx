import { useEffect, useState } from "react";
import { FormInterface } from "../types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/features/userSlice";
import { RootState } from "../store/store";
import { toast, Toaster } from "sonner";
import { object, string } from "yup";

const Form = ({ title }: FormInterface) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const signupSchema = object({
    email: string().email(),
    password: string().min(8).required(),
    confirmPassword: string().oneOf(
      [formData.password],
      "Password do not match"
    ),
  });
  const loginSchema = object({
    email: string().email(),
    password: string().required(),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title == "Login") {
      loginSchema
        .validate(formData)
        .then(() => {
          dispatch(addUser(formData));
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
        });
    } else {
      // if (formData.password !== formData.confirmPassword) {
      //   toast.error("Passwords do not match");
      // } else {
        signupSchema
        .validate(formData)
        .then(() => {
          dispatch(addUser(formData));
        })
        .catch((error) => {
          toast.error(error.message);
        });
      // }
    }
  };

  useEffect(() => {
    if (user.email) {
      navigate("/dashboard");
    }
  });

  return (
    <>
      <h1 className="text-2xl md:h-full text-white md:text-black font-semibold mb-4">
        {title}
      </h1>
      <Toaster richColors position="bottom-center" closeButton />
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
        <div className="flex flex-col text-white md:text-black">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
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
            <span onClick={() => navigate("/signup")} className="link">
              Sign up
            </span>
          </div>
        ) : (
          <div className="mt-2 text-white md:text-black">
            Already signed up?{" "}
            <span onClick={() => navigate("/login")} className="link">
              Login
            </span>
          </div>
        )}
      </form>
    </>
  );
};

export default Form;
