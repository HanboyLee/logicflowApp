import Catty from "./Catty";
import ComplexContainer from "./ComplexContainer";
import Puppy from "./Puppy";

export const DEFAULT = {
  name: "root",
  acceptsNewChildren: true,
  accepts: ["main", "image", "puppy", "complex"],
  children: [
    {
      name: "red div",
      item: "div",
      acceptsNewChildren: true,
      accepts: ["puppy", "complex", "main"],
      children: [
        {
          item: "span",
          children: ["Bye"],
          type: "main",
          props: {
            style: { color: "white", backgroundColor: "black" },
          },
        },
      ],
      props: {
        style: { backgroundColor: "red", minHeight: "50px" },
      },
    },
    {
      name: "green div",
      item: "div",
      acceptsNewChildren: true,
      accepts: ["main", "image", "puppy", "complex"],
      children: [
        {
          item: "span",
          children: ["Bye"],
          type: "main",
          props: {
            style: { color: "white", backgroundColor: "black" },
          },
        },
      ],
      props: {
        style: { backgroundColor: "green", minHeight: "50px" },
      },
    },
    {
      name: "blue div",
      item: "div",
      acceptsNewChildren: true,
      accepts: ["main", "puppy", "complex"],
      children: [
        {
          item: "span",
          children: ["Bye"],
          type: "main",
          props: {
            style: { color: "white", backgroundColor: "black" },
          },
        },
      ],
      props: {
        style: { backgroundColor: "blue", minHeight: "50px" },
      },
    },
  ],
  props: {
    isLayout: true,
    style: {
      height: "65vh",
    },
  },
};
