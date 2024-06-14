import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function PriviateRoute({path, components: Component, isAuth, isAdmin}) {
    const [profile, setProfile] = useState(true);

  if(!isAdmin && !profile && !isAuth) {
    return <Navigate to="/login" />
  }

  return <Component />
}

export default PriviateRoute