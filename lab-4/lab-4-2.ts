const addTwoPolynoms = ([polynom_a, polynom_b]: Array<Array<number>>): Array<number> => (
  polynom_a.length > 11 ? [] :
    polynom_b.length > 11 ? [] :
      polynom_a[0] !== polynom_a.length - 1 ? [] :
        polynom_b[0] !== polynom_b.length - 1 ? [] :
          Array.from({ length: Math.max(polynom_a.length, polynom_b.length) }, (_, i) =>
            (polynom_a[i] || 0) + (polynom_b[i] || 0)
          )
);

console.log(addTwoPolynoms([[2, 2, 99], [3, 3, 4, 5]]));