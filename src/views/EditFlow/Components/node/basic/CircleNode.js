import { EllipseResize } from "@logicflow/extension";
import {
  getShapeStyleFuction,
  getTextStyleFunction,
} from "../getShapeStyleUtil";

// 圆形
class CircleNewModel extends EllipseResize.model {
  initNodeData(data) {
    super.initNodeData(data);
    /**
     *  遇到问题
     * 如何绑定在graphmodel组件内?透过textvalue
     */

    this.rx = 35;
    this.ry = 35;
  }
  //   setAttributes() {
  //     const properties = this.getProperties();
  //     const data = this.getData();
  //     this.text.value =
  //       properties.moduleName || (data.text && data.text.value) || "";
  //     data.text = {
  //       value: properties.moduleName || this.text.value || "",
  //       x: data.x,
  //       y: data.y,
  //     };
  //     properties.moduleName = data.text.value;
  //     // console.log(properties.moduleName);
  //     console.log(this.properties);
  //     // if (this.text.value !== properties.moduleName) {
  //     this.properties.moduleName = this.text.value;
  //     // }
  //     // data.text.value
  //     super.updateText(this.text.value);
  //   }

  setToBottom() {
    this.zIndex = 0;
  }

  getNodeStyle() {
    const style = super.getNodeStyle();
    const properties = this.getProperties();

    return getShapeStyleFuction(style, properties);
  }

  getTextStyle() {
    const style = super.getTextStyle();
    const properties = this.getProperties();
    return getTextStyleFunction(style, properties);
  }
}

export default {
  type: "pro-circle",
  view: EllipseResize.view,
  model: CircleNewModel,
};
