import TriggerMirror from "./TriggerMirror";

//Trigger
export const info = [
  {
    name: "装备触发",
    accepts: ["image", "puppy", "complex"],
    props: {
      style: { color: "white", backgroundColor: "#eccc68" },
    },
    children: ["装备触发"],
    item: TriggerMirror,
    type: "main",
    acceptsNewChildren: true,
    rule: `$course:Course(score >=30 && score<=50)`,
  },
  {
    name: "定时触发",
    accepts: ["image", "puppy", "complex"],
    props: {
      style: { color: "white", backgroundColor: "#ffa502" },
    },
    children: ["定时触发"],
    item: TriggerMirror,
    type: "main",
    acceptsNewChildren: true,
    rule: `$course:Course(score >=75 && score<=89)`,
  },
];
