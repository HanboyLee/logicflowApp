import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class GasHolder1Model extends BaseCustomIcon.model {
  initNodeData(data) {
    super.initNodeData(data);
    // this.width = 70;
    this.height = 50;
  }
}

class GasHolder1View extends RectResize.view {
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
      width: 604,
      height: 376,
      style: "fill: transparent",
    };
    const paths = [
      {
        none: "M17,337 l0,-320 570,0 0,320",
      },
      {
        none: "M39,202 l0,157 527,0 0,-157",
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
  type: "gasHolder1",
  view: GasHolder1View,
  model: GasHolder1Model,
};
