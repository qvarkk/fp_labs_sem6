(([num1, num2, num3]: Array<number>): string => (
  num1 + num2 === num3 ? '+' : (
    num1 - num2 === num3 ? '-' : (
      num1 * num2 === num3 ? '*' : (
        num1 / num2 === num3 ? '/' : '')))
))([1, 2, 3])