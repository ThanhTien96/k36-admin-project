import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import PAGE_PATH from "../constant/pagePath";
import { useSelector } from "react-redux";
import { AUTH_STATE } from "../store/app/authSlice";

function PriviateRoute({
  path = PAGE_PATH.login,
  components: Component,
}) {
  const {profile, isAuth, role} = useSelector(store => store.auth);

  if(isAuth === AUTH_STATE.auth && profile) {
    return Component
  } else {
    return <Navigate to="/login" />
  }
}

export default PriviateRoute;
