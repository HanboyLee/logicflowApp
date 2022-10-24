import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class JacketedVesselModel extends BaseCustomIcon.model {
  //   initNodeData(data) {
  //     super.initNodeData(data);
  //     this.width = 100;
  //     this.height = 50;
  //   }
}

class JacketedVesselView extends RectResize.view {
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
      width: 547,
      height: 683,
      style: "fill: transparent",
    };
    const paths = [
      { "#d4d4d4": "M19,99 l48,0 0,517 -48,0 0,-517z" },
      { "#d4d4d4": "M480,99 l48,0 0,517 -48,0 0,-517z" },
      {
        "#d4d4d4":
          "M480,635 l0,-587 -10,-3 -10,-3 -11,-3 -11,-3 -12,-3 -12,-2 -13,-2 -13,-2 -13,-2 -14,-2 -14,-1 -14,-1 -15,-1 -14,0 -15,-1 -15,0 -15,0 -15,1 -15,0 -14,1 -15,1 -14,1 -14,2 -13,2 -13,2 -13,2 -12,2 -12,3 -12,3 -10,3 -10,3 -10,3 0,587 10,3 10,3 10,3 12,3 12,3 12,2 13,2 13,2 13,2 14,2 14,1 15,1 14,1 15,0 15,1 15,0 15,0 15,-1 14,0 15,-1 14,-1 14,-1 14,-2 13,-2 13,-2 13,-2 12,-2 12,-3 11,-3 11,-3 10,-3 10,-3z",
      },
    ];

    return h(
      "svg",
      {
        ...position,
        viewBox: "0 0 547 683",
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
  type: "jacketedVessel",
  view: JacketedVesselView,
  model: JacketedVesselModel,
};
