import React, { useEffect } from "react";
import useHelmet from "../hook/useHelmet";
import { useDispatch, useSelector } from "react-redux";
import { thunkFetchListUser } from "../store/app/asyncThunk";
import { Avatar, Image, Spin, Table } from "antd";

const UserPage = () => {
  useHelmet("App - User");
  const dispatch = useDispatch();
  const { loading, listUser } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(thunkFetchListUser());
  }, []);

  const data = listUser.map((ele, idx) => {
    return {
      key: ele.id,
      username: ele.username,
      fullName: ele.full_name,
      email: ele.email,
      dateOfBirth: ele.date_of_birth,
      role: ele.role,
      avatar: ele.avatar,
    };
  });

  const columnsData = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      width: "5%",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (ava, ele) => {
        return (
          <img alt="..." key={ele.username} width={50} src={ava} height={50} />
        );
      },
      key: "avatar",
      width: "10%",
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
      width: "10%",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      width: "20%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: "10%",
    },
    {
      title: "Date Of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      width: "10%",
    },
  ];

  return (
    <div className="overflow-y-scroll h-full">
      <Spin spinning={loading}>
        <Table columns={columnsData} dataSource={data} />
      </Spin>
      ;
    </div>
  );
};

export default UserPage;
