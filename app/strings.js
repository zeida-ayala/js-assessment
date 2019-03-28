stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    const reduceTo = n => (accum, current) => {
      let res = accum;
      if (accum.slice(-1) !== current) {
        res += current;
      } else if (accum.slice(-n) !== current.repeat(n)) {
        res += current;
      }
      return res;
    };
    return Object.values(str).reduce(reduceTo(amount));
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    const reversedStr = (accum, current) => {
      let res = accum;
      res = current + res;
      return res;
    };
    return Object.values(str).reduce(reversedStr);
  },
};
