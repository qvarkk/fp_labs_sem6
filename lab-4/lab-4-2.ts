const addTwoPolynoms = ([polynom_a, polynom_b]: Array<Array<number>>): Array<number> => (
  polynom_a.length > 11 ? [] :
    polynom_b.length > 11 ? [] :
      polynom_a[0] !== polynom_a.length - 1 ? [] :
        polynom_b[0] !== polynom_b.length - 1 ? [] :
          Array.from({ length: Math.max(polynom_a.length, polynom_b.length) }, (_, i) =>
            (polynom_a[i] || 0) + (polynom_b[i] || 0)
          )
);

const rec = ([polynom_a, polynom_b]) => {
  return _rec([polynom_a, polynom_b], [], Math.max(polynom_a.length - 1, polynom_b.length - 1));
};

const _rec = ([polynom_a, polynom_b]: Array<Array<number>>, res: Array<number>, i: number) => (
  i < 0 
    ? res
    : _rec([polynom_a, polynom_b], [(polynom_a[i] || 0) + (polynom_b[i] || 0), ...res], i - 1)
);


console.log(rec([[2, 2, 99], [3, 3, 4, 5]]));