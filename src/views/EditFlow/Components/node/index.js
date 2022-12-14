// 基础图形
import CircleNode from "./basic/CircleNode";
import RectNode from "./basic/RectNode";
import RectRadiusNode from "./basic/RectRadiusNode";
import EllipseNode from "./basic/EllipseNode";
import TextNode from "./basic/TextNode";
import DiamondNode from "./basic/DiamondNode";
// path绘制的个性化图形
import CylindeNode from "./path/CylindeNode";
import TriangleNode from "./path/TriangleNode";
import ParallelogramNode from "./path/ParallelogramNode";
import ActorNode from "./path/ActorNode";
import StarNode from "./path/Star";
import PentagonNode from "./path/PentagonNode";
import HexagonNode from "./path/HexagonNode";
import SeptagonNode from "./path/SeptagonNode";
import HeptagonNode from "./path/HeptagonNode";
import TrapezoidNode from "./path/TrapezoidNode";
import CrossNode from "./path/CrossNode";
import MinusNode from "./path/MinusNode";
import TimesNode from "./path/TimesNode";
import DivideNode from "./path/DivideNode";
// 多边形绘制的箭头
import LeftArrow from "./arrow/LeftArrow";
import RightArrow from "./arrow/RightArrow";
import HorizontalArrow from "./arrow/HorizontalArrowNode";
import UpArrow from "./arrow/UpArrowNode";
import DownArrow from "./arrow/DownArrowNode";
import VerticalArrow from "./arrow/VerticalArrowNode";
// image绘制图片节点
import ImageSetting from "./image/Setting";
import ImageUser from "./image/User";
import ImageCloud from "./image/Cloud";
// image绘制左上角icon节点
import IconMessage from "./icon/Message";
// 注册边
import Ployline from "./edge/Polyline";
import Line from "./edge/Line";
import Bezier from "./edge/Bezier";

//线
import animationEdge from "./line/animationEdge";

// 群组
import SelectGroup from "./group/SelectGroup";

// 自定义模版
import Ballvalue from "./customIcon/Ballvalue";
import Hydroscreen from "./customIcon/Hydroscreen";
import Furnace from "./customIcon/Furnace";
import Distillationtower from "./customIcon/Distillationtower";
import Finnedexchanger from "./customIcon/Finnedexchanger";
import Pump from "./customIcon/Pump";
import Reactor from "./customIcon/Reactor";
import Staticmixer from "./customIcon/Staticmixer";
import ValveFailindeterminate from "./customIcon/ValveFailindeterminate";
import JacketedVessel from "./customIcon/JacketedVessel";
import Vessel from "./customIcon/Vessel";
import AtmosphericTank from "./customIcon/AtmosphericTank";
import Bin from "./customIcon/Bin";
import FloatingRoofTank from "./customIcon/FloatingRoofTank";
import GasHolder1 from "./customIcon/GasHolder1";
import WeighHopper from "./customIcon/WeighHopper";
import CircuitBreaker from "./customIcon/CircuitBreaker";

export const registerCustomElement = (lf) => {
  // 注册基础图形
  lf.register(CircleNode);
  lf.register(RectNode);
  lf.register(RectRadiusNode);
  lf.register(EllipseNode);
  lf.register(DiamondNode);
  lf.register(TextNode);
  // 注册path绘制的个性化图形
  lf.register(CylindeNode);
  lf.register(TriangleNode);
  lf.register(ParallelogramNode);
  lf.register(ActorNode);
  lf.register(StarNode);
  lf.register(PentagonNode);
  lf.register(HexagonNode);
  lf.register(SeptagonNode);
  lf.register(HeptagonNode);
  lf.register(TrapezoidNode);
  lf.register(CrossNode);
  lf.register(MinusNode);
  lf.register(TimesNode);
  lf.register(DivideNode);
  // 注册多边形绘制的箭头
  lf.register(LeftArrow);
  lf.register(RightArrow);
  lf.register(HorizontalArrow);
  lf.register(UpArrow);
  lf.register(DownArrow);
  lf.register(VerticalArrow);
  // 注册image绘制图片节点
  lf.register(ImageSetting);
  lf.register(ImageUser);
  lf.register(ImageCloud);

  // 注册image绘制左上角icon节点
  lf.register(IconMessage);

  // 注册边
  lf.register(Ployline);
  lf.register(Line);
  lf.register(Bezier);

  //线
  lf.register(animationEdge);

  //   群组
  lf.register(SelectGroup);

  //   自定义模版
  lf.register(Ballvalue);
  lf.register(Hydroscreen);
  lf.register(Furnace);
  lf.register(Distillationtower);
  lf.register(Finnedexchanger);
  lf.register(Pump);
  lf.register(Reactor);
  lf.register(Staticmixer);
  lf.register(ValveFailindeterminate);
  lf.register(JacketedVessel);
  lf.register(Vessel);
  lf.register(AtmosphericTank);
  lf.register(Bin);
  lf.register(FloatingRoofTank);
  lf.register(GasHolder1);
  lf.register(WeighHopper);
  lf.register(CircuitBreaker);
};
