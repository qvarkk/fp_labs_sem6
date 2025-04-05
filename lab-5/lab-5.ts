const formPairs = <T, U>(
  list: T[],
  el: U,
  res: [T, U][] = []
): [T | undefined, U][] => {
  return list.length > 0
    ? formPairs(list.slice(0, -1), el, [...res, [list[list.length - 1], el]])
    : res;
};

const cartesianProduct = <T, U>(
  list1: T[],
  list2: U[],
  res: [T, U][] = []
): [T | undefined, U | undefined][] => {
  return list2.length > 0
    ? cartesianProduct(list1, list2.slice(0, -1), [
        ...res,
        ...formPairs(list1, list2[list2.length - 1]),
      ])
    : res;
};

console.log(cartesianProduct(["1", 2, 0x3], [4, "hello", "world"]));
