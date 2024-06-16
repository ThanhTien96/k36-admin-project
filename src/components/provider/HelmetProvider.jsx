import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const HelmetProvider = (props) => {
  const { app_title } = useSelector((state) => state.app);

  return (
    <>
      <Helmet title={app_title} />
      {props.children}
    </>
  );
};

export default HelmetProvider;
