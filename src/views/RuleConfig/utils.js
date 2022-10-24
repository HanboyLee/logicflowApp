export const moveChild = (fromObject, child, toObject) => {
  if (!fromObject.children) return fromObject;
  return {
    ...fromObject,
    children: [
      ...fromObject.children
        .filter((objChild) => objChild !== child)
        .map((objChild) => moveChild(objChild, child, toObject)),
      ...(fromObject === toObject ? [child] : []),
    ],
  };
};
