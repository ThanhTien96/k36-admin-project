import { message as _message } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MessageProvider = (props) => {
  const { message, status, logs } = useSelector((state) => state.app.message);

  const mesageOptions = {
    error: _message.error,
    warning: _message.warning,
    info: _message.info,
    success: _message.success
  };


  useEffect(() => {
    if(message !== "N/A") {
      mesageOptions[status](message, 0.5)
    }
  },[logs])

  return <>{props.children}</>;
};

export default MessageProvider;
