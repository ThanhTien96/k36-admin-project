import { message } from "antd";

const MessageProvider = (props) => {
  const [messageAPI, contextHolder] = message.useMessage();

  return (
    <div>
      {contextHolder}
      {props.children}
    </div>
  );
};

export default MessageProvider;
