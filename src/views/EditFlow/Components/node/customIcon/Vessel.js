import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class VesselModel extends BaseCustomIcon.model {
  initNodeData(data) {
    super.initNodeData(data);
    this.width = 70;
    // this.height = 100;
  }
}

class VesselView extends RectResize.view {
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
      width: 376,
      height: 571,
      style: "fill: transparent",
    };
    const paths = [
      {
        "#d4d4d4":
          "M360,530 l0,-490 -8,-3 -8,-2 -9,-3 -10,-2 -10,-2 -10,-2 -10,-2 -11,-2 -11,-1 -12,-1 -12,-1 -12,-1 -12,-1 -12,-1 -12,0 -13,0 -12,0 -13,0 -12,1 -12,1 -12,1 -12,1 -11,1 -11,1 -11,2 -11,2 -10,2 -10,2 -10,2 -9,3 -8,2 -8,3 0,490 8,3 8,2 9,3 10,2 10,2 10,3 11,1 11,2 11,2 11,1 12,1 12,1 12,1 12,1 13,0 12,0 13,0 12,0 12,-1 12,-1 12,-1 12,-1 12,-1 11,-2 11,-2 10,-1 10,-3 10,-2 10,-2 9,-3 8,-2 8,-3z",
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
            stroke: "#4c4c4c",
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
  type: "vessel",
  view: VesselView,
  model: VesselModel,
};
