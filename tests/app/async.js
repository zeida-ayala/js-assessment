describe('async behavior', () => {
  it('you should be able to retrieve data from the server and return a sorted array of names', (done) => {
    const url = '/data/testdata.json';

    asyncAnswers.manipulateRemoteData(url).then((result) => {
      expect(result).to.have.length(5);
      expect(result.join(' ')).to.eql('Adam Alex Matt Paul Rebecca');
      done();
    });
  });
});
