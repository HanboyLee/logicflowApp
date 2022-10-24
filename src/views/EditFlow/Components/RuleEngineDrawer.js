import React from "react";
import * as A from "antd";
//hooks
import { useIsVisibleRuleModel } from "@/hooks/EditFlowProvider";
import { useSize } from "ahooks";

// 暫時棄用
const RuleEngineModel = () => {
  const size = useSize(window.document.body);

  const drawerProps = React.useMemo(() => {
    return { width: size ? size.width / 2 : 500, placement: "right" };
  }, [size]);
  const [isVisibleRuleModel, setIsVisibleRuleModel] = useIsVisibleRuleModel();
  return (
    <A.Drawer
      {...drawerProps}
      open={isVisibleRuleModel}
      closeIcon={<></>}
      footer={
        <A.Space>
          <A.Button onClick={() => setIsVisibleRuleModel(false)}>取消</A.Button>
          <A.Button type="primary" onClick={() => setIsVisibleRuleModel(false)}>
            新增
          </A.Button>
        </A.Space>
      }
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </A.Drawer>
  );
};

export default React.memo(RuleEngineModel);
