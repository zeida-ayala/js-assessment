recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    const getFilesSubDirs = directory => (accum, current) => {
      let aux = accum;
      aux = accum.concat(listFiles(current, directory));
      return aux;
    };
    if (!dirName) {
      return data.subDirs.reduce(getFilesSubDirs(dirName), data.files);
    } else if (dirName === data.dirName) {
      return data.subDirs.reduce(getFilesSubDirs(undefined), data.files);
    }
    return data.subDirs.reduce(getFilesSubDirs(dirName), []);
  },

  /**
   *
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    return n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
  },
};
