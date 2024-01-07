// time complexity of O(n^2)
const calculatePrime = (n: number) => {
  let primes: number[] = [];
  for (let i = 2; primes.length < n; i++) {
    if (!primes.some((prime) => i % prime === 0)) {
      primes.push(i);
    }
  }
  return primes[n - 1];
};

export default calculatePrime;
