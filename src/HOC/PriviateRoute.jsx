import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AUTH_STATE } from "../store/app/authSlice";

function PriviateRoute({
  components: Component,
  isAdmin
}) {
  const {profile, isAuth, role} = useSelector(store => store.auth);

  if(!isAdmin && isAuth === AUTH_STATE.auth && profile) {
    console.log("object");
    return Component
  } else if(isAdmin && isAuth === AUTH_STATE.auth && profile) {

    if(role === "admin") {
      return Component
    } else {
      return <Navigate to="/login" />
    }
  } else {
    return <Navigate to="/login" />
  }
}

export default PriviateRoute;
