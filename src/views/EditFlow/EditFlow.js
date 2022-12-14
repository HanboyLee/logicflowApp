import React from "react";
import LogicFlow from "@logicflow/core";
import {
  Menu,
  Snapshot,
  MiniMap,
  SelectionSelect,
  Group,
} from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import styled from "styled-components";

//hooks
import useCustomRef from "@/hooks/useRefWithcallBack";
import {
  useProperties,
  useSelectedCurrentNode,
} from "@/hooks/EditFlowProvider";

//compoennts
import DiagramSidebar from "./Components/DiagramSidebar";
import DiagramToolbar from "./Components/DiagramToolbar";
import { registerCustomElement } from "./Components/node";
import PropertyPanel from "./Components/PropertyPanel";
//FIXME:暂时弃用
// import RuleEngineModel from "./Components/RuleEngineDrawer";
import PopupRuleModel from "./Components/PopupRuleModel";
const EditFlow = () => {
  const canvasRef = React.useRef(null);

  //   hooks
  const [lfRef, setRefLF, isDoneLfRef] = useCustomRef();
  const [, setProperties] = useProperties();
  const [, setSelectedCurrentNode] = useSelectedCurrentNode();

  const [activeNodes, setActiveNodes] = React.useState([]);
  const [activeEdges, setActiveEdges] = React.useState([]);

  //  监听右侧面板显示
  const isOpenPanel = React.useMemo(() => {
    const isSelectGroup = activeNodes.some((d) => d.type === "selectGroup");
    if (isSelectGroup || activeNodes.length > 1 || activeEdges.length > 1) {
      return false;
    }
    return activeNodes.length > 0 || activeEdges.length > 0;
  }, [activeNodes, activeEdges]);

  //   初始化设定
  const flowConfig = React.useMemo(
    () => ({
      animation: true,
      background: {
        backgroundImage:
          'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")',
        backgroundRepeat: "repeat",
      },
      grid: {
        size: 5,
        visible: false,
      },

      overlapMode: 1,
      autoWrap: true,
      multipleSelectKey: "shift",
      edgeTextDraggable: true,
      hoverOutline: false,
    }),
    []
  );

  //   拖拉左侧面版到主面板区
  const dragInNode = React.useCallback(
    (type) => {
      lfRef.current.dnd.startDrag({
        type,
      });
    },
    [lfRef]
  );

  //   获取节点及边样式
  const getProperty = React.useCallback(() => {
    let proper = {};
    const { nodes, edges } = lfRef.current.getSelectElements();
    nodes.forEach((node) => {
      proper = { ...proper, ...node.properties };
    });
    edges.forEach((edge) => {
      proper = { ...proper, ...edge.properties };
    });
    setProperties(proper);
    return proper;
  }, []);

  //添加菜单功能
  const additionMenu = React.useCallback((lf) => {
    lf.extension.menu.addMenuConfig({
      // 节点
      nodeMenu: [
        {
          text: "往上移",
          callback(node) {
            lf.setElementZIndex(node.id, "top");
          },
        },
        {
          text: "往下移",
          callback(node) {
            lf.setElementZIndex(node.id, "bottom");
          },
        },
        // {
        //   text: "属性",
        //   callback(node) {
        //     alert(`
        //   节点id：${node.id}
        //   节点类型：${node.type}
        //   节点坐标：(x: ${node.x}, y: ${node.y})`);
        //   },
        // },
      ],
      //   边
      edgeMenu: [
        {
          text: "往上移",
          callback(edge) {
            lf.setElementZIndex(edge.id, "top");
          },
        },
        {
          text: "往下移",
          callback(edge) {
            lf.setElementZIndex(edge.id, "bottom");
          },
        },
        // {
        //   text: "属性edgeMenu",
        //   callback(edge) {
        //     alert(`
        //   边id：${edge.id}
        //   边类型：${edge.type}
        //   边坐标：(x: ${edge.x}, y: ${edge.y})
        //   源节点id：${edge.sourceNodeId}
        //   目标节点id：${edge.targetNodeId}`);
        //   },
        // },
      ],
    });
  }, []);

  //  设置模组样式
  const setLFElementStyle = React.useCallback(
    (params) => {
      activeNodes.forEach(({ id }) => {
        lfRef.current.setProperties(id, params);
      });
      activeEdges.forEach(({ id }) => {
        lfRef.current.setProperties(id, params);
      });
      getProperty();
    },
    [lfRef, activeNodes, activeEdges, getProperty]
  );

  const setCurrentNodeHandle = React.useCallback(
    (lf) => {
      lf.on("node:click,edge:click", (node) => {
        setSelectedCurrentNode(node);
      });
    },
    [setSelectedCurrentNode]
  );

  // 初始化
  const initWrokflow = React.useCallback(() => {
    const lf = new LogicFlow({
      ...flowConfig,
      plugins: [Menu, Snapshot, MiniMap, SelectionSelect, Group],
      container: canvasRef.current,
      keyboard: {
        enabled: true,
        shortcuts: [
          {
            keys: ["alt+="],
            callback: () => {
              lf.zoom(true);
            },
          },
          {
            keys: ["alt+-"],
            callback: () => {
              lf.zoom(false);
            },
          },
        ],
      },
    });

    lf.setTheme({
      baseEdge: { strokeWidth: 1 },
      baseNode: { strokeWidth: 1 },
      nodeText: { overflowMode: "autoWrap", lineHeight: 1.5 },
      edgeText: { overflowMode: "autoWrap", lineHeight: 1.5 },
    });

    // 初始化线条样式
    lf.setDefaultEdgeType("pro-polyline");

    // 注册组件
    registerCustomElement(lf);

    // 添加Common Menu
    additionMenu(lf);
    console.log(lf);

    //点击当前的节点目标(focus)
    setCurrentNodeHandle(lf);

    let timer;
    lf.on("selection:selected,node:click,blank:click,edge:click", () => {
      timer = setTimeout(() => {
        const { nodes, edges } = lf.getSelectElements();

        setActiveNodes(nodes);
        setActiveEdges(edges);
        getProperty();
      });
    });

    lf.render();

    setRefLF(lf);
    return () => {
      clearTimeout(timer);
    };
  }, [flowConfig, getProperty, setRefLF, additionMenu, setCurrentNodeHandle]);

  //   初始化工作流
  React.useEffect(() => {
    initWrokflow();
  }, [initWrokflow]);

  return (
    <Diagram>
      {/* 工具列 */}
      <div className="diagram-toolbar">
        <DiagramToolbar
          dragInNode={dragInNode}
          ref={lfRef}
          isDoneLfRef={isDoneLfRef}
        />
      </div>
      {/* 侧边工具栏 */}
      <div className="diagramMain">
        <div className="diagramSidebar">
          <DiagramSidebar dragInNode={dragInNode} />
        </div>
        <div className="diagram-container">
          {/* 画布 */}
          <div className="diagram-wrapper">
            <CanvasContainer
              className="lf-diagram"
              ref={canvasRef}
            ></CanvasContainer>
          </div>
        </div>
      </div>

      <PropertyPanel
        isOpenPanel={isOpenPanel}
        isDoneLfRef={isDoneLfRef}
        ref={lfRef}
        setLFElementStyle={setLFElementStyle}
      />

      <PopupRuleModel />
      {/* 暂时弃用 */}
      {/* <RuleEngineModel /> */}
    </Diagram>
  );
};

const Diagram = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  & * {
    box-sizing: border-box;
  }
  .diagram-toolbar {
    position: absolute;
    top: 0;
    left: 200px;
    height: 40px;
    width: auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    z-index: 10;
    background: #e5e5e5;
  }
  .diagramMain {
    display: flex;
    width: 100%;
    height: 100%;
    .diagramSidebar {
      width: 200px;
      height: calc(100% - 40px);
      border-right: 1px solid #dadce0;
    }
  }

  .diagram-container {
    flex: 1;
  }
  /* 由于背景图和gird不对齐，需要css处理一下 */
  .diagram .lf-background {
    left: -9px;
  }
  .diagram-wrapper {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .lf-diagram {
    box-shadow: 0px 0px 4px #838284;
    width: 100%;
    height: calc(100% - 10px);
  }
  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
    background: white;
    border-left: 1px solid #e8e8e8;
  }
  ::-webkit-scrollbar-thumb {
    border-width: 1px;
    border-style: solid;
    border-color: #fff;
    border-radius: 6px;
    background: #c9c9c9;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b5b5b5;
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  outline: none;
`;

export default EditFlow;
