// Full credit goes to d3 (https://github.com/mbostock/d3?source=cc) which this is
// basically extracted from...

module.exports = function(domain, range){
  var uninter = uninterpolateNumber(domain[0], domain[1])
    , inter = interpolateNumber(range[0], range[1]);

  return function(x){
    return uninter(inter(x));
  };
};

function interpolateNumber(a, b){
  b -= a = +a;
  return function(t){
    return a + b * t;
  };
}

function uninterpolateNumber(a, b){
  b = b - (a = +a) ? 1 / (b - a) : 0;
  return function(x) {
    return (x - a) * b;
  };
}