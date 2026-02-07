'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    add(x) {
      this.result = this.result + x;
    },
    subtract(x) {
      this.result = this.result - x;
    },
    multiply(x) {
      this.result = this.result * x;
    },
    divide(x) {
      this.result = this.result / x;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
