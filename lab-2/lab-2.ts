(([area, perimeter]: Array<number>): Array<number> => {
  let side_a: number = (([a_coefficient, b_coefficient, discriminant]: Array<number>) => (
    (-b_coefficient + Math.sqrt(discriminant)) / (2 * a_coefficient)
  ))([
    ((perimeter: number) => (2 * perimeter))(perimeter),
    (([area, perimeter]: Array<number>) => -(perimeter * perimeter + 4 * area))([area, perimeter]),
    (([coefficient_a, coefficient_b, coefficient_c]: Array<number>) => (
      coefficient_b * coefficient_b - 4 * coefficient_a * coefficient_c
    ))([
      ((perimeter: number) => (2 * perimeter))(perimeter),
      (([area, perimeter]: Array<number>) => -(perimeter * perimeter + 4 * area))([area, perimeter]),
      (([area, perimeter]: Array<number>) => (4 * perimeter * area))([area, perimeter])
    ])
  ]);

  if (side_a > 0) {
    let side_b = (2 * area) / side_a;
    let side_c = perimeter - side_a - side_b;

    console.log(`A: ${side_a}\nB: ${side_b}\nC: ${side_c}`);
    return [side_a, side_b, side_c];
  }
  else {
    console.log('No triangle with such area and perimeter exists');
    return [0, 0, 0];
  }

})([6, 12]); // <----- Change area and perimeter here
