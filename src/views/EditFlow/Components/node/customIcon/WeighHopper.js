import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class WeighHopperModel extends BaseCustomIcon.model {
  //   initNodeData(data) {
  //     super.initNodeData(data);
  //     this.width = 70;
  //     // this.height = 100;
  //   }
}

class WeighHopperView extends RectResize.view {
  getResizeShape() {
    const { x, y, width, height } = this.props.model;
    const style = this.props.model.getNodeStyle();
    const position = {
      x: x - width / 2,
      y: y - height / 2,
      width: width,
      height: height,
    };
    // TODO:透明遮罩避免空白地方无法选取
    const bgAttrs = {
      width: 603,
      height: 533,
      style: "fill: transparent",
    };
    const paths = [
      {
        "#c0c0c0": "M31,17 l178,370 0,129 185,0 0,-129 178,-370 -541,0z",
      },
      {
        none: "M31,17 l0,349",
      },
      {
        none: "M572,17 l0,349",
      },
      {
        none: "M45,366 l-28,0",
      },
      {
        none: "M586,366 l-28,0",
      },
    ];

    return h(
      "svg",
      {
        ...position,
        viewBox: `0 0 ${bgAttrs.width} ${bgAttrs.height}`,
      },
      [
        ...paths.map((d) =>
          h("path", {
            fill: Object.keys(d).toString(),
            stroke: "#000",
            strokeWidth: 2,
            d: Object.values(d).toString(),
          })
        ),
        h("rect", bgAttrs),
      ]
    );
  }
}

export default {
  type: "weighHopper",
  view: WeighHopperView,
  model: WeighHopperModel,
};
