import { v4 as uuidv4 } from "uuid";
import {
  BranchesOutlined,
  ApartmentOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import { useRoutes } from "react-router-dom";
import React from "react";
// const styles = { width: 20, height: 20, verticalAlign: 'middle' };

export const links = [
  {
    key: uuidv4(),
    to: "/editorFlow",
    label: "编辑工作流",
    icon: <BranchesOutlined />,
  },
  {
    key: uuidv4(),
    to: "/viewWorkflow",
    label: "预览工作流",
    icon: <ApartmentOutlined />,
    // children: []
  },
  {
    id: uuidv4(),
    to: "/ruleConfig",
    label: "规则列表",
    icon: <BuildOutlined />,
  },
  // {
  //     id: uuidv4(),
  //     to: '/BpmnDemo',
  //     title: 'BpmnDemo',
  //     Icon: <CustomerServiceFilled />,
  // },
];

const Layout = React.lazy(() => import("../views/Layout"));
const EditFlow = React.lazy(() => import("../views/EditFlow"));
const ViewWorkflow = React.lazy(() => import("../views/ViewWorkflow"));
const RuleConfig = React.lazy(() => import("../views/RuleConfig"));
export const RoutePages = () => {
  const routers = useRoutes([
    {
      path: "/",
      exact: true,
      element: withComponent(Layout),
      // element: <Layout />

      children: [
        {
          //   index: true,
          path: "/editorFlow",
          element: withComponent(EditFlow),
        },
        {
          path: "/viewWorkflow",
          element: withComponent(ViewWorkflow),
        },
        {
          index: true,

          //   path: "/ruleConfig",
          element: withComponent(RuleConfig),
        },
      ],
    },
  ]);
  return routers;
};

const withComponent = (Com) => {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Com />
    </React.Suspense>
  );
};
