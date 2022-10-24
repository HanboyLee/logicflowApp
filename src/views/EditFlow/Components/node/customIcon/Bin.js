import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class BinModel extends BaseCustomIcon.model {
  //   initNodeData(data) {
  //     super.initNodeData(data);
  //     this.width = 70;
  //     // this.height = 100;
  //   }
}

class BinView extends RectResize.view {
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
      width: 401,
      height: 401,
      style: "fill: transparent",
    };
    const paths = [
      {
        "#c0c0c0": "M11,11 l379,0 0,209 -113,170 -152,0 -114,-170 0,-209z",
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
  type: "bin",
  view: BinView,
  model: BinModel,
};
