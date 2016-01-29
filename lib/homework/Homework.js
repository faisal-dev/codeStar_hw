// init Hw class
function Hw() {

}

// Check input. @If number then true else false 
Hw.prototype.isNumber = function(input) {
  input = parseInt(input);
  return typeof input === 'number' 
    && !isNaN(input);
}


Hw.prototype.convertMeter = function(value, unit) {
  const footVal = 3.28084;

  this.foot = function() {
    return value * footVal;
  }

  return this.isNumber(value) === true ? value * footVal : 'Wrong input, Please enter the number.';

};

module.exports = Hw;
