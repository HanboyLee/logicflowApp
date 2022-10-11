import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";

import BaseCustomIcon from "./BaseCustomIcon";

class FinnedexchangerModel extends BaseCustomIcon.model {}

class FinnedexchangerView extends RectResize.view {
  getResizeShape() {
    const { x, y, width, height } = this.props.model;
    const style = this.props.model.getNodeStyle();
    console.log(x, y, width, height);
    const position = {
      x: x - width / 2,
      y: y - height / 2,
      width: width,
      height: height,
    };
    const paths = [
      "M167,0 l0,418",
      "M251,0 l0,418",
      "M334,0 l0,418",
      "M418,0 l0,418",
      "M501,0 l0,418",
      "M84,209 l501,0",
      "M0,42 l584,0",
      "M84,376 l584,0",
      "M84,375 l-10,-7 -8,-8 -8,-9 -6,-11 -5,-11 -4,-12 -2,-12 -1,-13 1,-13 2,-12 4,-12 5,-11 7,-11 7,-9 9,-8 9,-7",
      "M585,208 l9,-7 9,-8 7,-9 7,-10 5,-12 4,-12 2,-12 1,-13 -1,-13 -2,-12 -4,-12 -5,-11 -7,-10 -8,-10 -8,-8 -10,-6",
    ];

    // TODO:透明遮罩避免空白地方无法选取
    const bgAttrs = {
      width: 668,
      height: 418,
      style: "fill: transparent",
    };
    return h(
      "svg",
      {
        ...position,
        viewBox: "0 0 668 418",
      },
      [
        h("rect", { ...bgAttrs }),
        ...paths.map((d) =>
          h("path", {
            fill: "none",
            stroke: "#4c4c4c",
            strokeWidth: 2,
            d: d,
          })
        ),
      ]
    );
  }
}

export default {
  type: "finnedexchanger",
  view: FinnedexchangerView,
  model: FinnedexchangerModel,
};
