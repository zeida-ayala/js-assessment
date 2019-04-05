asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    const promise = new Promise((resolve, reject) => {
      if (value) {
        resolve(value);
      }
      reject(new Error('Error'));
    });
    return promise;
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    const onError = error => Promise.reject(new Error(error));
    const status = (response) => {
      if (response.ok) {
        return Promise.resolve(response.json());
      }
      return onError(response.statusText);
    };
    const transformData = (accum, current) => {
      accum.push(current.name);
      return accum;
    };
    const onSuccess = data => Promise.resolve(data.people.reduce(transformData, []).sort());
    return fetch(url)
      .then(status)
      .then(onSuccess)
      .catch(onError);
  },
};
