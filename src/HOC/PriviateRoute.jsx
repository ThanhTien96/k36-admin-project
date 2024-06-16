import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import PAGE_PATH from "../constant/pagePath";

function PriviateRoute({
  path = PAGE_PATH.login,
  components: Component,
  isAuth,
  isAdmin,
}) {
  const [profile, setProfile] = useState(true);

  if (isAuth) {
    if (!profile) {
      return <Navigate to={path} />;
    } else {
      return <Component />;
    }
  }

  if (isAdmin) {
    if (!profile) {
      return <Navigate to={path} />;
    } else if (profile.role === "ADMIN") {
      return <Component />;
    } else {
      return <Navigate to={path} />;
    }
  }
  return <Component />;
}

export default PriviateRoute;
