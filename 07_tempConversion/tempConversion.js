const ftoc = function(num) {
  num = (num-32)/1.8*10;
  num = Math.round(num);
  return num/10;
};

const ctof = function(num) {
  num = (num*1.8+32)*10;
  num = Math.round(num);
  return num/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
