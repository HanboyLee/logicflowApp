import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class ValveFailindeterminateModel extends BaseCustomIcon.model {
  //   initNodeData(data) {
  //     super.initNodeData(data);
  //     this.width = 100;
  //     this.height = 50;
  //   }
}

class ValveFailindeterminateView extends RectResize.view {
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
      width: 441,
      height: 653,
      style: "fill: transparent",
    };
    const paths = [
      { "#e9e9e9": "M0,653 l441,-220 0,220 -441,-220 0,220z" },
      { none: "M221,542 l0,-362" },
      {
        "#e9e9e9":
          "M221,180 l-180,0 1,-18 3,-18 4,-17 6,-17 8,-16 9,-14 10,-14 12,-13 13,-12 14,-10 14,-9 16,-8 17,-6 17,-4 18,-3 18,-1 18,1 18,3 18,4 16,6 16,8 15,9 13,10 13,12 11,13 11,14 9,14 7,16 6,17 4,17 3,18 1,18 -179,0z",
      },
      { none: "M75,294 l293,0" },
    ];

    return h(
      "svg",
      {
        ...position,
        viewBox: "0 0 441 653",
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
  type: "valveFailindeterminate",
  view: ValveFailindeterminateView,
  model: ValveFailindeterminateModel,
};
