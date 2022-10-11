import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class ReactorModel extends BaseCustomIcon.model {}

class ReactorView extends RectResize.view {
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
        viewBox: "0 0 393 498",
      },
      [
        h("path", {
          fill: "#e9e9e9",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: "M391,445 l0,-393 -9,-6 -9,-5 -10,-6 -11,-5 -11,-4 -11,-5 -12,-3 -13,-4 -13,-3 -13,-3 -13,-2 -14,-2 -14,-2 -14,-1 -14,-1 -14,0 -14,0 -15,1 -14,1 -14,2 -13,2 -14,2 -13,3 -13,3 -12,4 -12,3 -12,5 -11,4 -10,5 -10,6 -9,5 -9,6 0,394 9,6 9,5 10,6 10,5 11,4 12,5 12,3 12,4 13,3 13,3 14,2 13,2 14,2 14,1 15,1 14,0 14,0 14,-1 14,-1 14,-2 14,-2 13,-2 13,-3 13,-4 13,-3 12,-4 11,-5 11,-4 11,-5 10,-6 9,-5 9,-6z",
        }),
        h("path", {
          fill: "none",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: "M0,445 l393,0",
        }),
        h("path", {
          fill: "none",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: "M0,52 l393,0",
        }),
      ]
    );
  }
}

export default {
  type: "reactor",
  view: ReactorView,
  model: ReactorModel,
};
