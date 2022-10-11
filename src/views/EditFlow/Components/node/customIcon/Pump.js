import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";

import BaseCustomIcon from "./BaseCustomIcon";

class PumpModel extends BaseCustomIcon.model {}

class PumpView extends RectResize.view {
  getResizeShape() {
    const { x, y, width, height } = this.props.model;
    const style = this.props.model.getNodeStyle();
    const position = {
      x: x - width / 2,
      y: y - height / 2,
      width: width,
      height: height,
    };
    const paths = [
      "M431,147 l3,9 3,9 2,10 1,9 2,9 0,10 1,9 0,9 -1,23 -3,22 -6,21 -7,21 -10,19 -11,18 -12,17 -15,16 -15,14 -17,13 -19,11 -19,10 -20,7 -21,6 -22,3 -23,1 -23,-1 -22,-3 -21,-6 -20,-7 -20,-10 -18,-11 -17,-13 -16,-14 -14,-16 -13,-17 -11,-18 -9,-19 -8,-21 -5,-21 -4,-22 -1,-23 1,-23 4,-22 5,-21 8,-20 9,-19 11,-19 13,-17 14,-15 16,-15 17,-12 18,-11 20,-10 20,-7 21,-6 22,-3 23,-1 369,0 0,147 -160,0z",
      "M371,384 l-16,13 -16,12 -18,10 -18,9 -20,6 -20,5 -20,3 -21,1 -21,-1 -21,-3 -20,-5 -20,-7 -19,-9 -18,-10 -16,-12 -15,-13 -72,142 443,0 -72,-141z",
    ];

    return h(
      "svg",
      {
        ...position,
        viewBox: "0 0 591 525",
      },
      paths.map((d) =>
        h("path", {
          fill: "#e9e9e9",
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d,
        })
      )
    );
  }
}

export default {
  type: "pump",
  view: PumpView,
  model: PumpModel,
};
