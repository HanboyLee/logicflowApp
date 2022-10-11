import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import BaseCustomIcon from "./BaseCustomIcon";

class StaticmixerModel extends BaseCustomIcon.model {
  initNodeData(data) {
    super.initNodeData(data);
    this.width = 100;
    this.height = 50;
  }
}

class StaticmixerView extends RectResize.view {
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
      { "#e9e9e9": "M0,0 l630,0 0,283 -630,0 0,-283z" },
      { none: "M362,142 l-63,-95" },
      { none: "M315,142 l-63,94" },
      { none: "M252,142 l-63,-95" },
      { none: "M205,142 l-64,94" },
      { none: "M141,142 l-62,-95" },
      { none: "M95,142 l-63,94" },
      { none: "M582,142 l-62,-95" },
      { none: "M535,142 l-62,94" },
      { none: "M473,142 l-64,-95" },
      { none: "M425,142 l-63,94" },
    ];

    return h(
      "svg",
      {
        ...position,
        viewBox: "0 0 630 283",
      },
      paths.map((d) =>
        h("path", {
          fill: Object.keys(d).toString(),
          stroke: "#4c4c4c",
          strokeWidth: 2,
          d: Object.values(d).toString(),
        })
      )
    );
  }
}

export default {
  type: "staticmixer",
  view: StaticmixerView,
  model: StaticmixerModel,
};
