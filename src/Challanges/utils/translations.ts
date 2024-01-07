const translations: { [key: string]: any } = {
  "en-US": {
    nextPrime: "Next prime",
    nthPrime: function (count: string, nthPrime: number) {
      return `The prime at position ${count} is ${nthPrime}`;
    },
  },
  "en-ES": {
    nextPrime: "Por favor Next Primo",
    nthPrime: function (count: string, nthPrime: number) {
      return `Por Favor espanol prime si positional ${count} mundo ${nthPrime}`;
    },
  },
};

export default translations;
