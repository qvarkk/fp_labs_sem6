const isPrime = (num: number, divisor: number = 2): boolean => (
  num <= 2 ? num === 2 :
    num % divisor === 0 ? false :
      divisor * divisor > num ? true :
        isPrime(num, divisor + 1)
);

const findPrimesLessThanN = (N: number, current: number = 2, primes: Array<number> = []): Array<number> => (
  current >= N ? primes :
    isPrime(current) ? findPrimesLessThanN(N, current + 1, [...primes, current]) :
      findPrimesLessThanN(N, current + 1, primes)
);

console.log(findPrimesLessThanN(210));