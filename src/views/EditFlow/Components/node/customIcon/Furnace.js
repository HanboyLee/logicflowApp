import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import {
  getShapeStyleFuction,
  getTextStyleFunction,
} from "../getShapeStyleUtil";
import BaseCustomIcon from "./BaseCustomIcon";

class FurnaceModel extends BaseCustomIcon.model {}

class FurnaceView extends RectResize.view {
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
        viewBox: "0 0 394 591",
      },
      [
        h("path", {
          fill: "#e9e9e9",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: "M0,591 l0,-276 118,-118 0,-197 158,0 0,197 118,118 0,276 -394,0z",
        }),
      ]
    );
  }
}

export default {
  type: "furnace",
  view: FurnaceView,
  model: FurnaceModel,
};
