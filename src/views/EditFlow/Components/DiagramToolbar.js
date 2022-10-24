import clsx from "clsx";
import React from "react";
import styled from "styled-components";
import { ZoomIn, ZoomOut, StepBack, StepFoward, AreaSelect } from "./icon";
import * as A from "antd";
import PropsTypes from "prop-types";
//components
import DataDialog from "@/components/LogicFlowCom/DataDialog";

const DiagramToolbar = React.forwardRef((props, lf) => {
  const [linetype, setLinetype] = React.useState("pro-polyline");
  const [selectionOpened, setSelectionOpened] = React.useState(false);
  const [isUndoAble, setIsUndoAble] = React.useState(false);
  const [isRedoAble, setIsRedoAble] = React.useState(false);
  const [visableModel, setVisableModel] = React.useState(false);

  const jsonData = React.useMemo(() => {
    if (visableModel) {
      return lf.current.getGraphRawData();
    }
    return {};
  }, [visableModel, lf]);

  const lineOptions = [
    {
      value: "pro-polyline",
      label: "折线",
    },
    {
      value: "pro-line",
      label: "直线",
    },
    {
      value: "pro-bezier",
      label: "曲线",
    },
    {
      value: "animation-edge",
      label: "动画线",
    },
  ];

  //   const saveGraph = () => {
  //     this.$emit("saveGraph");
  //   };
  const zoomIn = () => {
    lf.current.zoom(true);
  };
  const zoomOut = () => {
    lf.current.zoom(false);
  };
  const undo = () => {
    if (isUndoAble) {
      lf.current.undo();
    }
  };

  const redo = () => {
    if (isRedoAble) {
      lf.current.redo();
    }
  };

  // 地图框选开关
  const selectionSelect = () => {
    setSelectionOpened((prev) => !prev);
  };

  //地图导览
  const mapNavigator = React.useCallback(() => {
    lf.current.extension.miniMap.show(
      0,
      lf.current.container.offsetHeight - lf.current.extension.miniMap.__height
    );
    lf.current.extension.miniMap.__height = 250;
    lf.current.extension.miniMap.__width = 250;
    document.querySelector(".lf-mini-map-close").style.display = "none";
    document.querySelector(
      ".lf-mini-map-graph"
    ).style.width = `${lf.current.container.offsetWidth}px`;
  }, []);

  //Mounted
  React.useEffect(() => {
    if (props.isDoneLfRef) {
      mapNavigator();
      lf.current.on("history:change", ({ data: { undoAble, redoAble } }) => {
        setIsUndoAble(undoAble);
        setIsRedoAble(redoAble);
      });
    }
  }, [props.isDoneLfRef, lf, mapNavigator]);

  //   選擇框指定物件區域
  React.useEffect(() => {
    if (lf.current) {
      if (selectionOpened) {
        lf.current.extension.selectionSelect.openSelectionSelect();
      } else {
        lf.current.extension.selectionSelect.closeSelectionSelect();
      }
    }
  }, [selectionOpened, lf]);

  //   更换edge
  const changeLineType = React.useCallback(
    (value) => {
      const { graphModel } = lf.current;
      lf.current.setDefaultEdgeType(value);
      setLinetype(value);
      const { edges } = lf.current.getSelectElements();
      if (edges && edges.length > 0) {
        edges.forEach((edge) => {
          graphModel.changeEdgeType(edge.id, value);
        });
      }
    },
    [lf]
  );

  const showModal = () => {
    setVisableModel((prev) => !prev);
  };
  const closeModal = () => {
    setVisableModel(false);
  };

  return (
    <>
      <ToolbarItem
        className={clsx({ "selection-active": selectionOpened })}
        onClick={selectionSelect}
      >
        <AreaSelect size={18} />
      </ToolbarItem>
      <A.Tooltip title="alt + =" placement="bottom">
        <ToolbarItem onClick={zoomIn}>
          <ZoomIn size={18} />
        </ToolbarItem>
      </A.Tooltip>

      <A.Tooltip title="alt + -" placement="bottom">
        <ToolbarItem onClick={zoomOut}>
          <ZoomOut size={18} />
        </ToolbarItem>
      </A.Tooltip>

      <A.Tooltip title="control + z" placement="bottom">
        <ToolbarItem onClick={undo}>
          <StepBack size={18} />
        </ToolbarItem>
      </A.Tooltip>
      <A.Tooltip title="control + y" placement="bottom">
        <ToolbarItem onClick={redo}>
          <StepFoward size={18} />
        </ToolbarItem>
      </A.Tooltip>
      <ToolbarItem className="checkNode" onClick={showModal}>
        <span>查看数据</span>
      </ToolbarItem>
      <A.Tooltip title="请拖拽群组组件" placement="bottom">
        <ToolbarItem
          className="checkNode"
          onMouseDown={() => props.dragInNode("selectGroup")}
        >
          <span>群组组件</span>
        </ToolbarItem>
      </A.Tooltip>
      <ToolbarItem className="selectBar">
        <A.Select
          value={linetype}
          //   defaultValue={linetype}
          onSelect={changeLineType}
        >
          {lineOptions.map((d) => {
            return (
              <A.Select.Option value={d.value} key={d.value}>
                {d.label}
              </A.Select.Option>
            );
          })}
        </A.Select>
      </ToolbarItem>

      {/* JSON数据弹窗 */}
      <A.Modal
        width={"80%"}
        bodyStyle={{ height: `550px`, padding: 0 }}
        footer={false}
        closable={false}
        onCancel={closeModal}
        open={visableModel}
        cancelText="关闭"
      >
        <DataDialog data={jsonData} />
      </A.Modal>
    </>
  );
});

export default React.memo(DiagramToolbar);

DiagramToolbar.propTypes = {
  isDoneLfRef: PropsTypes.bool,
  dragInNode: PropsTypes.func,
};

const ToolbarItem = styled.div`
  width: 18px;
  height: 18px;
  float: left;
  margin: 12px 4px;
  cursor: pointer;
  user-select: none;

  &.toolbar-color-picker {
    width: 24px;
    height: 24px;
    margin: 8px 4px;
  }
  &.selection-active {
    background: #33a3dc;
  }
  &.selectBar {
    line-height: 3;
    width: 120px;
    height: 100%;
    & > span {
      width: 100%;
    }
  }
  &.checkNode {
    &:hover {
      background: #33a3dc;
      color: #fff;
    }

    width: 100px;
    height: 24px;
    border: 1px solid #555;
    background: #fff;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
  }
`;
