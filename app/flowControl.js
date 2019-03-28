flowControlAnswers = {
  /**
   * Returns a string, that is either fizz, buzz, or fizzbuzz depending on a number num.
   * 
   * If the number is divisible by 3, the function should return 'fizz';
   * If the number is divisible by 5, the function should return 'buzz';
   * If the number is divisible by 3 and 5, the function should return 'fizzbuzz';
   * Otherwise the function should return the number.
   * If no number was provided or the value was not a number , return false.
   * 
   * @param {Number} num - A number used to determine the result
   * @returns {String} The string 'fizz', 'buzz', or 'fizzbuzz'
   */
  fizzBuzz: function fizzBuzz(num) {
    let res = '';
    const isDivisible = (n, divisible) => n % divisible === 0;
    if (!Number.isInteger(num)) {
      res = false;
    } else if (isDivisible(num, 5) && isDivisible(num, 3)) {
      res = 'fizzbuzz';
    } else if (isDivisible(num, 3)) {
      res = 'fizz';
    } else if (isDivisible(num, 5)) {
      res = 'buzz';
    } else {
      res = num;
    }
    return res;
  },
};
