import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  GithubOutlined,
  LogoutOutlined,
  AppstoreOutlined
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import PAGE_PATH from "../constant/pagePath";
const { Header, Sider, Content } = Layout;

const MainTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-[100vh]">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* logo */}
        <div className="h-[50px] flex justify-center items-center gap-4">
          <GithubOutlined className="text-[30px] text-white" />
          {!collapsed && (
            <h3 className="font-semibold text-[18px] text-white">Admin</h3>
          )}
        </div>
        {/* menu */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AppstoreOutlined />,
              label: "Home",
              onClick: () => {
                navigate(PAGE_PATH.home)
              }
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "User",
              onClick: () => {
                navigate(PAGE_PATH.user)
              }
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="flex justify-between"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          {/* profile */}
          <div className="flex items-center gap-14 mr-10">
            <div className="flex items-center gap-3">
              <Avatar />
              <h4>Tony Nguyen</h4>
            </div>
            <LogoutOutlined className="text-[18px] cursor-pointer hover:text-rose-500 transition-all duration-300" />
          </div>

        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainTemplate;
