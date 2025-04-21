type ArrayFn<T, U> = (arr: T[]) => U;
type PredicateFn<T> = (a: T, b: T) => boolean;

const formPairs = <T, U>(
  list: T[],
  el: U,
  res: [T, U][] = []
): [T, U][] => {
  return list.length > 0
    ? formPairs(list.slice(0, -1), el, [...res, [list[list.length - 1], el]])
    : res;
};

const cartesianProduct = <T, U>(
  list1: T[],
  list2: U[],
  res: [T, U][] = []
): [T, U][] => {
  return list2.length > 0
    ? cartesianProduct(list1, list2.slice(0, -1), [
        ...res,
        ...formPairs(list1, list2[list2.length - 1]),
      ])
    : res;
};

const test = <T, R>(
  data: T[],
  funcs: ArrayFn<T, R>[],
  predicate: PredicateFn<R>
): boolean => {
  return _test(
    cartesianProduct(
      funcs.map(func => func(data)), 
      funcs.map(func => func(data))
    ), predicate);
};

const _test = <R>(
  values: [R, R][],
  predicate: PredicateFn<R>,
  result: boolean = true
): boolean => {
  return result
    ? values.length > 0
      ? _test(
          values.slice(1),
          predicate,
          predicate(values[0][0], values[0][1])
        )
      : result
    : false;
};

const data: number[] = [1, 2, 3, 4, 5];
const fn1: ArrayFn<number, number> = (arr) => arr.reduce((prev, curr) => prev + curr);
const fn2: ArrayFn<number, number> = (arr) => arr[4] * 3 + 0.06;
const fn3: ArrayFn<number, number> = (arr) => arr[0] * 15 + 0.12;
const pred: PredicateFn<number> = (a, b) => a - b < 0.1;

console.log(fn1(data));
console.log(fn2(data));
console.log(fn3(data));
console.log(test(data, [fn1, fn2, fn3], pred));
