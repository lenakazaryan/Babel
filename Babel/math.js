export const Pow = function (base, exponent) {
  let res = base;
  for (let i = 1; i < exponent; i++) {
    res *= base;
  }
  return res;
};

export const hypotenuse = function (adjacent, opposite) {
  let res = Math.sqrt(adjacent + opposite);
  return {
    adjacent,
    opposite,
    res,
  };
};

export const circleArea = function (radius) {
  return 2 * PI * radius;
};

export const PI = Math.PI;
