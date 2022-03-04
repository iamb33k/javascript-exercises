let farenheit;
let celsius;

const ftoc = function(farenheit) {
  let result;
  result = (farenheit - 32) * (5/9);
  return Math.round(result * 10) / 10;
};

const ctof = function(celsius) {
  let result;
  result = celsius * 1.8 + 32
  return Math.round(result * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
