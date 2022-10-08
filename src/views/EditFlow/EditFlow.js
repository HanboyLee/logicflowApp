import React from "react";
import LogicFlow from "@logicflow/core";
import { Menu, Snapshot, MiniMap, SelectionSelect } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import styled from "styled-components";

//compoennts
import DiagramSidebar from "./Components/DiagramSidebar";
import DiagramToolbar from "./Components/DiagramToolbar";
import { registerCustomElement } from "./Components/node";
//hooks
import useCustomRef from "@/hooks/useRefWithcallBack";
import PropertyPanel from "./Components/PropertyPanel";
const EditFlow = () => {
  const canvasRef = React.useRef(null);
  const lf = React.useRef(null);
  const [lfRef, setRefLF, isDoneLfRef] = useCustomRef();
  const [activeNodes, setActiveNodes] = React.useState([]);
  const [activeEdges, setActiveEdges] = React.useState([]);
  const [properties, setProperties] = React.useState([]);

  const isOpenPanel = React.useMemo(() => {
    return activeNodes.length > 0 || activeEdges.length > 0;
  }, [activeNodes, activeEdges]);
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
      keyboard: {
        enabled: true,
      },
      overlapMode: 1,
      autoWrap: true,
      multipleSelectKey: "shift",
      edgeTextDraggable: true,
      hoverOutline: false,
    }),
    []
  );
  const dragInNode = React.useCallback(
    (type) => {
      lfRef.current.dnd.startDrag({
        type,
      });
    },
    [lfRef]
  );
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

  const setLFElementStyle = React.useCallback(
    (params) => {
      console.log(params);
      activeEdges.forEach(({ id }) => {
        lfRef.current.setProperties(id, params);
      });
      activeNodes.forEach(({ id }) => {
        lfRef.current.setProperties(id, params);
      });
    },
    [activeEdges, activeNodes, lfRef]
  );

  const initWrokflow = React.useCallback(() => {
    const lf = new LogicFlow({
      ...flowConfig,
      plugins: [Menu, Snapshot, MiniMap, SelectionSelect],
      container: canvasRef.current,
    });

    lf.setTheme({
      baseEdge: { strokeWidth: 1 },
      baseNode: { strokeWidth: 1 },
      nodeText: { overflowMode: "autoWrap", lineHeight: 1.5 },
      edgeText: { overflowMode: "autoWrap", lineHeight: 1.5 },
    });

    // 注册组件
    registerCustomElement(lf);
    //小地图
    console.log(lf);
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
  }, [flowConfig, getProperty, setRefLF]);

  React.useEffect(() => {
    initWrokflow();
  }, [initWrokflow]);

  return (
    <Diagram>
      {/* 工具列 */}
      <div className="diagram-toolbar">
        <DiagramToolbar ref={lfRef} isDoneLfRef={isDoneLfRef} />
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
    </Diagram>
  );
};

const Diagram = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  & * {
    box-sizing: border-box;
  }
  .diagram-toolbar {
    position: absolute;
    top: 0;
    left: 200px;
    height: 40px;
    width: 310px;
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
      width: 185px;
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
