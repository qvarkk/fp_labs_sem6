const cartesianProduct = <T, U>(list1: T[], list2: U[]): [T, U][] => {
  const result: [T, U][] = [];

  for (const item1 of list1) {
    for (const item2 of list2) {
      result.push([item1, item2]);
    }
  }

  Array.from(list1.length * list2.length);

  return result;
};