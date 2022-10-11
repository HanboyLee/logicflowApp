import { h } from "@logicflow/core";
import { RectResize } from "@logicflow/extension";
import {
  getShapeStyleFuction,
  getTextStyleFunction,
} from "../getShapeStyleUtil";

class BaseCustomIconModel extends RectResize.model {
  initNodeData(data) {
    super.initNodeData(data);
    this.width = 100;
    this.height = 100;
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

class BaseCustomIconView extends RectResize.view {
  getResizeShape() {
    return;
  }
}

export default {
  type: "baseCustomIcon",
  view: BaseCustomIconView,
  model: BaseCustomIconModel,
};
