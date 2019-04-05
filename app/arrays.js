arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.

    // this is my own implementation for getting index
    /* const getIndex = (accum, node, index) => {
      let res = accum;
      if (node === item) {
        res = index;
      }
      return res;
    };
    return arr.reduce(getIndex, -1); */

    return arr.indexOf(item); 
  },

  /**
   * Determine the sum of the items of arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
    const total = (x, y) => x + y;
    return arr.reduce(total);
  },

  /**
   * Create a new array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {
    const filterElem = elem => elem !== item;
    return arr.filter(filterElem);
  },

  /**
   * Create an array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from thearray
   * @returns {Number[]} The array arr containing all numbers from arr except item.
   */
  removeWithoutCopy: function removeWithoutCopy(arr, item) {
    const removeItem = (elem, index) => {
      arr.splice(elem - index, 1);
    };    
    const filterToRemove = (accum, value, index) => {
      if (item === value) {
        accum.push(index);
      }
      return accum;
    };
    const indexesToRemove = arr.reduce(filterToRemove, []);
    indexesToRemove.map(removeItem);
    return arr;
  },
  /**
   * Adds a number, item, to the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
    // this is my own implementation   
    /* const arrayAdded = arr;
    arrayAdded[arr.length] = item;
    return arrayAdded; 
    */
    arr.push(item);
    return arr;
  },

  /**
   * Removes a number, item, from the end of an array, arr. fixx
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {   
    // arr.splice(-1, 1);
    arr.pop();
    return arr;
  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {
    // this is my own implementation
    /* const addItem = (accum, value, index) => {
      arr[index] = accum;
      return value;
    };
    arr[arr.length] = arr.reduce(addItem, item);
    return arr; */

    arr.unshift(item);
    return arr;
  },

  /**
   * Removes the first element from an array
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
    // this is my own implementation
    /* const removeItem = (accum, value, index) => {
      if (index > 0) {
        arr[index - 1] = value;
      }
    };
    arr.reduce(removeItem);
    arr.splice(-1, 1);
    return arr; */

    arr.shift();
    return arr;
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   * 
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
    // this is my own implementation
    /* const arrResult = [];
    const add = (value, index) => {
      arrResult[index] = value;
    };
    arr1.forEach(add);
    arr2.forEach((value) => {
      add(value, arrResult.length);
    }); 
    return arrResult; */

    return [...arr1, ...arr2];
  },
  /**
   * Insert a number item into an array arr at the 0 based position index.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {    
    // this is my own implementation
    /* let aux;
    const arrResult = arr;
    arr.forEach((value, currentIndex) => {
      if (currentIndex >= index) {
        arrResult[currentIndex] = (currentIndex === index) ? item : aux;
        aux = value;
      }
    });
    arrResult[arr.length] = aux;
    return arrResult; */
    arr.splice(index, 0, item);
    return arr;
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
    const countItem = (total, value) => {
      const res = (value === item) ? total + 1 : total;
      return res;
    };
    return arr.reduce(countItem, 0);
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {
    const getDuplicated = (accum, elem, i, arrElem) => {
      if (arrElem.indexOf(elem) !== i && accum.indexOf(elem) < 0) {
        accum.push(elem);
      }
      return accum;
    };
    return arr.reduce(getDuplicated, []);
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {
    const getSquare = value => value * value;
    return arr.map(getSquare);
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {
    const getIndexOfItem = value => (accum, item, index) => {
      if (value === item) {
        accum.push(index);
      }
      return accum;
    };
    return arr.reduce(getIndexOfItem(target), []);
  },
};
