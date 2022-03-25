const ftoc = function(deg) {
  num = (deg - 32)*5/9;
  return +num.toFixed(1);
};

const ctof = function(deg) {
  num = deg * 9/5 + 32;
  return +num.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
