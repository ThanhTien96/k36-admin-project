import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import UserRequester from "../service/userRequester";
import {} from "../store/app";
import { updateMessage } from "../store/app/reducer";

const LoginPage = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("please input your user name!"),
      password: yup.string().required("please input your password!"),
    }),
    onSubmit: async (value) => {
      try {
        const res = await UserRequester.listUser();

        if (res.status === 200) {
          const listUser = res.data;

          const findUser = listUser.find(
            (ele) => ele.username === value.username
          );
          if (!findUser) {
           
            return;
          }
          if (findUser.password !== value.password) {
           
            return;
          }

          dispath(
            updateMessage({ message: "login successfully.", status: "success" })
          );
          navigate("");
        }
      } catch (err) {
        console.log("☣️👻👻 >>> onSubmit: >>> err: ", err);
        dispath(updateMessage({ message: "user not found", status: "error" }));
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 border border-solid border-gray-200 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Welcome Back!
        </h1>
        <form onSubmit={formik.handleSubmit}>
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
              required
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
              required
            />
            {formik.errors.username && formik.touched.username && (
              <span className="text-[12px] text-red-500">
                {formik.errors.username}
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
