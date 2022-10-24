import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";
import CircuitBreaker from "@/assets/svgs/CircuitBreaker.svg";
class CircuitBreakerModel extends BaseCustomIcon.model {
  initNodeData(data) {
    super.initNodeData(data);
    //   this.width = 70;
    this.height = 30;
  }
}

class CircuitBreakerView extends RectResize.view {
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
      width: 541,
      height: 123,
      style: "fill: transparent",
    };

    return h(
      "svg",
      {
        ...position,
        viewBox: `0 0 ${bgAttrs.width} ${bgAttrs.height}`,
      },
      [
        h("path", {
          fill: "none",
          stroke: "#000",
          strokeWidth: 2,
          d: "M15,77 l11,-7 12,-7 13,-6 14,-6 14,-6 15,-5 16,-4 16,-5 17,-3 17,-4 18,-2 18,-3 18,-2 18,-1 19,-1 19,0 19,0 19,1 19,1 18,2 19,3 17,2 17,4 17,3 16,5 16,4 15,5 14,6 14,6 13,6 12,7 11,7",
        }),
        h("circle", {
          fill: "#c0c0c0",
          stroke: "#000",
          strokeWidth: 2,
          cx: 55,
          cy: 99,
          r: 8,
        }),
        h("circle", {
          fill: "#c0c0c0",
          stroke: "#000",
          strokeWidth: 2,
          cx: 486,
          cy: 99,
          r: 8,
        }),
        h("rect", bgAttrs),
      ]
    );
  }
}

export default {
  type: "circuitBreaker",
  view: CircuitBreakerView,
  model: CircuitBreakerModel,
};
