import { PolylineEdge, PolylineEdgeModel } from "@logicflow/core";

class CustomEdgeModel extends PolylineEdgeModel {
  // customTextPosition = true;
  initEdgeData(data) {
    super.initEdgeData(data);
  }
  setAttributes() {
    this.isAnimation = true;
  }
  getEdgeAnimationStyle() {
    const style = super.getEdgeAnimationStyle();
    style.strokeDasharray = "5 5";
    style.animationDuration = "20s";
    style.strokeDashoffset = "35%";
    return style;
  }
}

class CustomEdge extends PolylineEdge {}

export default {
  type: "animation-edge",
  model: CustomEdgeModel,
  view: CustomEdge,
};
