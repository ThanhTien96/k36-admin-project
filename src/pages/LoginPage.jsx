import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import UserRequester from "../service/userRequester";
import { MESSAGE_STATUS, setAlert } from "../store/app/alertSlice";
import { setAuthProfile } from "../store/app/authSlice";


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("user name is required!"),
      password: yup.string().required("password is required!"),
    }),
    onSubmit: async (value) => {
      try {
        const res = await UserRequester.listUser();

        if (res.status === 200 && Array.isArray(res.data)) {
          const findUser = res.data.find(
            (ele) => ele.username === value.username
          );
    

          if (!findUser) {
            dispatch(
              setAlert({
                message: "User name is incorrect!",
                status: MESSAGE_STATUS.error,
              })
            );
          } else if (findUser.password.includes(value.password)) {

            dispatch(setAuthProfile(findUser));
            dispatch(
              setAlert({
                message: "Login successfully.",
                status: MESSAGE_STATUS.success,
              })
            );
            navigate("/")
          } else {
            dispatch(
              setAlert({
                message: "Password is incorrect!",
                status: MESSAGE_STATUS.error,
              })
            );
          }
        } else {
          throw new Error("Invalid response data");
        }
      } catch (err) {
        dispatch(
          setAlert({
            message: "login error",
            status: MESSAGE_STATUS.error,
          })
        );
      }
    },
  });


  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 border border-solid border-gray-200 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Welcome Back!
        </h1>
        <form onSubmit={formik.handleSubmit} action="#">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="input user name"
            />
            {formik.errors.username && formik.touched.username && (
              <span className="text-[12px] text-red-500">
                {formik.errors.username}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              name="password"
              onChange={formik.handleChange}
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
            {formik.errors.username && formik.touched.username && (
              <span className="text-[12px] text-red-500">
                {formik.errors.password}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <Link
              to={"/singup"}
              className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
