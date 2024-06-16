import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UploadImg from "../components/UploadImage";
import * as yup from "yup";
import UserRequester from "../service/userRequester";
import { useDispatch } from "react-redux";
import { updateMessage } from "../store/app/reducer";
import PAGE_PATH from "../constant/pagePath";

const SingupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      full_name: "",
      email: "",
      date_of_birth: "",
      avatar: "",
      role: "admin"
    },
    validationSchema: yup.object({
      username: yup.string().required("user name is required!"),
      password: yup.string().required("password is required!"),
      full_name: yup.string().required("full name is required!"),
      email: yup.string().required("emailis required!"),
      date_of_birth: yup.string().required("date of birth is required!"),
      avatar: yup.string().required("avatar is required!"),
    }),
    onSubmit: async (value) => {
      try {
        const res = await UserRequester.singup(value);
        if(res.status === 201) {
          navigate("/login");
          dispatch(updateMessage({message: "Register successfully.", status: "success"}));
        }
      } catch (err) {
        dispatch(updateMessage({message: err.response.data, status: "error"}));
      }
    },
  });

  return (

    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950 ">
      <div className="bg-white dark:bg-gray-900 border border-solid border-gray-200 shadow-md rounded-lg px-8 py-6 w-2/6">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Register
        </h1>
        <form onSubmit={formik.handleSubmit} action="#">
          {/* username */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              User Name
            </label>
            <input
              name="username"
              onChange={formik.handleChange}
              type="text"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="input user name"
            />
            {formik.errors.username && formik.touched.username && (
              <span className="text-[12px] text-red-500">
                {formik.errors.username}
              </span>
            )}
          </div>
          {/* password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
            {formik.errors.password && formik.touched.password && (
              <span className="text-[12px] text-red-500">
                {formik.errors.password}
              </span>
            )}
          </div>
          {/* email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              name="email"
              onChange={formik.handleChange}
              type="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
            />
            {formik.errors.email && formik.touched.email && (
              <span className="text-[12px] text-red-500">
                {formik.errors.email}
              </span>
            )}
          </div>

          {/* full name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              name="full_name"
              onChange={formik.handleChange}
              type="text"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="input full name"
            />
            {formik.errors.full_name && formik.touched.full_name && (
              <span className="text-[12px] text-red-500">
                {formik.errors.full_name}
              </span>
            )}
          </div>

          {/* date of birth */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date Of Birth
            </label>
            <input
              name="date_of_birth"
              onChange={formik.handleChange}
              type="text"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="input date of birth"
            />
            {formik.errors.date_of_birth && formik.touched.date_of_birth && (
              <span className="text-[12px] text-red-500">
                {formik.errors.date_of_birth}
              </span>
            )}
          </div>
          {/* avatar */}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Avatar
            </label>
            <UploadImg
              handleGetBase64Url={(value) => {
                formik.setFieldValue("avatar", value);
              }}
            />
            {formik.errors.avatar && formik.touched.avatar && (
              <span className="text-[12px] text-red-500">
                {formik.errors.avatar}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mb-4">
            <Link
              to={"/singin"}
              className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Singin
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingupPage;
