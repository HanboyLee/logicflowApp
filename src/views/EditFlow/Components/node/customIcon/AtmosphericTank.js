import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class AtmosphericTankModel extends BaseCustomIcon.model {
  //   initNodeData(data) {
  //     super.initNodeData(data);
  //     // this.width = 70;
  //     // this.height = 100;
  //   }
}

class AtmosphericTankView extends RectResize.view {
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
      width: 501,
      height: 500,
      style: "fill: transparent",
    };
    const paths = [
      {
        "#d4d4d4": "M14,486 l0,-354 473,0 0,354 -473,0z",
      },
      {
        "#d4d4d4": "M14,132 l473,0 -237,-118 -236,118z",
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
  type: "atmosphericTank",
  view: AtmosphericTankView,
  model: AtmosphericTankModel,
};
