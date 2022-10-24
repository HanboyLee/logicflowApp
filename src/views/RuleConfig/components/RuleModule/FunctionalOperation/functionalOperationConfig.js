import TriggerMirror from "./TriggerMirror";

//Trigger
export const info = [
  {
    name: "函数运算1",
    props: {
      style: { color: "white", backgroundColor: "#ff6b81" },
    },
    children: ["函数运算1"],
    item: TriggerMirror,
    type: "main",
    acceptsNewChildren: true,
    rule: `&&`,
  },
  {
    name: "函数运算1",
    props: {
      style: { color: "white", backgroundColor: "##a4b0be" },
    },
    children: ["函数运算1"],
    item: TriggerMirror,
    type: "main",
    rule: `>>`,
  },
];
