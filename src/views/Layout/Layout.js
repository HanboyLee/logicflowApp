import React from "react";

import { Breadcrumb, Layout, Menu } from "antd";
import styled from "styled-components";
import { links } from "@/router";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function getItem({ label, key, icon, children, to }) {
  return {
    key,
    icon,
    children,
    label: (
      <NavLink to={to} className="menuItem">
        {label}
      </NavLink>
    ),
  };
}

const menuItems = links.map((d) => getItem(d));

const LayoutStyle = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      />
      <Layout className="site-layout">
        <CustomMenu
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu defaultSelectedKeys={["1"]} mode="inline" items={menuItems} />
        </CustomMenu>

        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutStyle;

const CustomMenu = styled(Sider)``;
