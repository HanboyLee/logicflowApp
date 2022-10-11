import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";

import BaseCustomIcon from "./BaseCustomIcon";
// 人物
class BallValueModel extends BaseCustomIcon.model {
  initNodeData(data) {
    console.log(data, "data");
    super.initNodeData(data);
    this.width = 100;
    this.height = 50;
  }
}

class BallValueView extends RectResize.view {
  getResizeShape() {
    const { x, y, width, height } = this.props.model;
    const style = this.props.model.getNodeStyle();
    const position = {
      x: x - width / 2,
      y: y - height / 2,
      width: width,
      height: height,
    };
    return h("svg", { ...position, viewBox: "0 0 788 236" }, [
      h("path", {
        fill: "none",
        stroke: "#4c4c4c",
        strokeWidth: 2,
        d: "M178,120 l-178,0",
      }),
      h("path", {
        fill: "#e9e9e9",
        stroke: "#4c4c4c",
        strokeWidth: 2,
        d: "M611,120 l177,0",
      }),
      h("path", {
        fill: "#e9e9e9",
        stroke: "#4c4c4c",
        strokeWidth: 2,
        d: "M360,137 l-182,99 0,-236 182,101 -2,4 -1,4 -1,5 0,4 0,5 1,4 1,5 2,5z",
      }),
      h("path", {
        fill: "#e9e9e9",
        stroke: "#4c4c4c",
        strokeWidth: 2,
        d: "M429,99 l182,-99 0,236 -182,-101 2,-4 1,-4 1,-5 0,-4 0,-5 -1,-5 -1,-4 -2,-5z",
      }),
      h("circle", {
        fill: "#e9e9e9",
        stroke: "#4c4c4c",
        strokeWidth: 2,
        cx: 395,
        cy: 118,
        r: 39,
      }),
    ]);
  }
}

export default {
  type: "ballvalue",
  view: BallValueView,
  model: BallValueModel,
};
