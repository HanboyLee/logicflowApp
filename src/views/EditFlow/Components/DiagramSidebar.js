import React from "react";
import styled from "styled-components";
import * as A from "antd";
import SidebarCustomIcon from "@/components/LogicFlowCom/SidebarCustomIcon";
// icon Components
import {
  Circle,
  Rect,
  RectRadius,
  Actor,
  Cylinde,
  Diamond,
  Ellipse,
  Parallelogram,
  Text,
  Triangle,
  LeftArrow,
  RightArrow,
  HorizontalArrow,
  UpArrow,
  DownArrow,
  VerticalArrow,
  Pentagon,
  Hexagon,
  Septagon,
  Heptagon,
  Trapezoid,
  Cross,
  Minus,
  Times,
  Divide,
} from "./icon";
import {
  Ballvalue,
  Distillationtower,
  Finnedexchanger,
  Furnace,
  Hydroscreen,
  Pump,
  Reactor,
  Staticmixer,
  ValveFailindeterminate,
} from "@/assets/svgs";

const DiagramSidebar = ({ dragInNode }) => {
  return (
    <DiagramSidebarContinaer>
      <A.Collapse defaultActiveKey={["1", "2", "3", "4"]}>
        <A.Collapse.Panel header="一般组件" key="1">
          <div className="node-category">
            <div
              className="node-item"
              onMouseDown={() => dragInNode("pro-circle")}
            >
              <div className="svg-node">
                <Circle />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("pro-rect")}
            >
              <div className="svg-node">
                <Rect />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("rect-radius")}
            >
              <div className="svg-node">
                <RectRadius />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("triangle")}
            >
              <div className="svg-node">
                <Triangle />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("pro-ellipse")}
            >
              <div className="svg-node">
                <Ellipse />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("pro-diamond")}
            >
              <div className="svg-node">
                <Diamond />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("cylinde")}
            >
              <div className="svg-node">
                <Cylinde />
              </div>
            </div>
            <div className="node-item" onMouseDown={() => dragInNode("actor")}>
              <div className="svg-node">
                <Actor />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("parallelogram")}
            >
              <Parallelogram />
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("pro-text")}
            >
              <div className="svg-node">
                <Text />
              </div>
            </div>

            <div
              className="node-item"
              onMouseDown={() => dragInNode("left-arrow")}
            >
              <div className="svg-node">
                <LeftArrow />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("right-arrow")}
            >
              <div className="svg-node">
                <RightArrow />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("horizontal-arrow")}
            >
              <div className="svg-node">
                <HorizontalArrow />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("up-arrow")}
            >
              <div className="svg-node">
                <UpArrow />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("down-arrow")}
            >
              <div className="svg-node">
                <DownArrow />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("vertical-arrow")}
            >
              <div className="svg-node">
                <VerticalArrow />
              </div>
            </div>
            {/* <div class="node-item"onMouseDown={()=>dragInNode('star')}>
          star
        </div>  */}
            <div
              className="node-item"
              onMouseDown={() => dragInNode("pentagon")}
            >
              <div className="svg-node">
                <Pentagon />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("hexagon")}
            >
              <div className="svg-node">
                <Hexagon />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("septagon")}
            >
              <div className="svg-node">
                <Septagon />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("heptagon")}
            >
              <div className="svg-node">
                <Heptagon />
              </div>
            </div>
            <div
              className="node-item"
              onMouseDown={() => dragInNode("trapezoid")}
            >
              <div className="svg-node">
                <Trapezoid />
              </div>
            </div>
            <div className="node-item" onMouseDown={() => dragInNode("cross")}>
              <div className="svg-node">
                <Cross />
              </div>
            </div>
            <div className="node-item" onMouseDown={() => dragInNode("minus")}>
              <div className="svg-node">
                <Minus />
              </div>
            </div>
            <div className="node-item" onMouseDown={() => dragInNode("times")}>
              <div className="svg-node">
                <Times />
              </div>
            </div>
            <div className="node-item" onMouseDown={() => dragInNode("divide")}>
              <div className="svg-node">
                <Divide />
              </div>
            </div>
          </div>
        </A.Collapse.Panel>
        <A.Collapse.Panel header="图片" key="2">
          <div
            className="image-node image-setting"
            onMouseDown={() => dragInNode("image-setting")}
          ></div>
          <div
            className="image-node image-user"
            onMouseDown={() => dragInNode("image-user")}
          ></div>
          <div
            className="image-node image-cloud"
            onMouseDown={() => dragInNode("image-cloud")}
          ></div>
        </A.Collapse.Panel>

        <A.Collapse.Panel header="ICON" key="3">
          <div
            className="icon-node icon-message"
            onMouseDown={() => dragInNode("icon-message")}
          ></div>
        </A.Collapse.Panel>
        <A.Collapse.Panel header="工厂组件" key="4">
          <SidebarCustomIcon
            title="Ballvalue"
            onMouseDown={() => dragInNode("ballvalue")}
          >
            <Ballvalue />
          </SidebarCustomIcon>

          <SidebarCustomIcon
            title="Hydroscreen"
            onMouseDown={() => dragInNode("hydroscreen")}
          >
            <Hydroscreen />
          </SidebarCustomIcon>

          <SidebarCustomIcon
            title="Furnace"
            onMouseDown={() => dragInNode("furnace")}
          >
            <Furnace />
          </SidebarCustomIcon>

          <SidebarCustomIcon
            title="Distillationtower"
            onMouseDown={() => dragInNode("distillationtower")}
          >
            <Distillationtower />
          </SidebarCustomIcon>
          <SidebarCustomIcon
            title="Finnedexchanger"
            onMouseDown={() => dragInNode("finnedexchanger")}
          >
            <Finnedexchanger />
          </SidebarCustomIcon>
          <SidebarCustomIcon
            title="Pump"
            onMouseDown={() => dragInNode("pump")}
          >
            <Pump />
          </SidebarCustomIcon>
          <SidebarCustomIcon
            title="Reactor"
            onMouseDown={() => dragInNode("reactor")}
          >
            <Reactor />
          </SidebarCustomIcon>
          <SidebarCustomIcon
            title="Staticmixer"
            onMouseDown={() => dragInNode("staticmixer")}
          >
            <Staticmixer />
          </SidebarCustomIcon>
          <SidebarCustomIcon
            title="ValveFailindeterminate"
            onMouseDown={() => dragInNode("valveFailindeterminate")}
          >
            <ValveFailindeterminate />
          </SidebarCustomIcon>
        </A.Collapse.Panel>
      </A.Collapse>
    </DiagramSidebarContinaer>
  );
};

export default DiagramSidebar;

const DiagramSidebarContinaer = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;

  .node-item {
    width: 35px;
    height: 35px;
    margin-right: 5px;
    display: inline-block;
  }
  .node-category {
    border-bottom: 1px solid #e5e5e5;
  }
  .svg-node {
    left: 1px;
    top: 1px;
    width: 32px;
    height: 30px;
    display: block;
    position: relative;
    overflow: hidden;
  }
  .image-node,
  .icon-node {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 10px;
    cursor: pointer;
  }
  .image-setting {
    background: url("https://dpubstatic.udache.com/static/dpubimg/UzI4AFUcfO/setting.png");
    background-size: cover;
  }
  .image-user {
    width: 40px;
    background: url("https://dpubstatic.udache.com/static/dpubimg/-6Fd2uIoJ-/user.png");
    background-size: cover;
  }
  .image-cloud {
    width: 40px;
    background: url("https://dpubstatic.udache.com/static/dpubimg/0oqFX1nvbD/cloud.png");
    background-size: cover;
  }
  .icon-message {
    height: 20px;
    background: url("https://dpubstatic.udache.com/static/dpubimg/1TZgBoaq8G/message.png");
    background-size: cover;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }
`;
