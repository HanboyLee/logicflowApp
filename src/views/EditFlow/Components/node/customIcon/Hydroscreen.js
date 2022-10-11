import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";

import BaseCustomIcon from "./BaseCustomIcon";

class HydroscreenModel extends BaseCustomIcon.model {}

class HydroscreenView extends RectResize.view {
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
        viewBox: "0 0 445 593",
      },
      [
        h("path", {
          fill: "#d4d4d4",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: "M445,445 l-31,-2 -30,-7 -29,-11 -28,-15 -27,-19 -25,-22 -23,-26 -22,-29 -19,-31 -18,-35 -15,-36 -13,-39 -10,-41 -8,-43 -4,-44 -2,-45 -141,0 1,593 444,0 0,-148z",
        }),
      ]
    );
  }
}

export default {
  type: "hydroscreen",
  view: HydroscreenView,
  model: HydroscreenModel,
};
