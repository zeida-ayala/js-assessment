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
    const reduceTo = (accum, current) => {
      if (accum.slice(-1) !== current) {
        accum = accum.concat(current);
      } else if (accum.slice(-amount) !== current.repeat(amount)) {
        accum = accum.concat(current);
      }
      return accum;
    };
    return Object.values(str).reduce(reduceTo);
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
    const reversedStr = (accum, current) => current.concat(accum);
    return Object.values(str).reduce(reversedStr);
  },
};
