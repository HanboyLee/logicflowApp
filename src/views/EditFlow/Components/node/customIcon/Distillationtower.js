import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";

import BaseCustomIcon from "./BaseCustomIcon";

class DistillationtowerModel extends BaseCustomIcon.model {
  initNodeData(data) {
    super.initNodeData(data);
    this.width = 50;
    this.height = 100;
  }
}

class DistillationtowerView extends RectResize.view {
  getResizeShape() {
    const { x, y, width, height } = this.props.model;
    const style = this.props.model.getNodeStyle();
    const position = {
      x: x - width / 2,
      y: y - height / 2,
      width: width,
      height: height,
    };

    return h(
      "svg",
      {
        ...position,
        viewBox: "0 0 170 664",
      },
      [
        h("path", {
          fill: "#e9e9e9",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: "M170,601 l0,-539 -5,-13 -8,-12 -9,-11 -10,-9 -12,-7 -13,-6 -14,-3 -14,-1 -14,1 -14,3 -13,6 -12,7 -11,9 -9,11 -7,12 -5,13 0,539 5,13 7,12 9,11 11,9 12,8 13,5 14,4 14,1 14,-1 14,-4 13,-5 12,-8 10,-9 9,-11 8,-12 5,-13z",
        }),
        h("path", {
          fill: "none",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: "M170,601 l-170,0",
        }),
        h("path", {
          fill: "none",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: "M0,62 l170,0",
        }),
      ]
    );
  }
}

export default {
  type: "distillationtower",
  view: DistillationtowerView,
  model: DistillationtowerModel,
};
