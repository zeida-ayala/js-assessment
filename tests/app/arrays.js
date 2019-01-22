describe('arrays', () => {
  let a;

  beforeEach(() => {
    a = [1, 2, 3, 4];
  });

  it('you should be able to sum the items of an array', () => {
    expect(arraysAnswers.sum(a)).to.eql(10);
  });

  it('you should be able to remove all instances of a value from an array', () => {
    a.push(2); // Make sure the value appears more than one time
    a.push(2); // Make sure the value appears more than one time in a row
    const result = arraysAnswers.remove(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');
  });

  it('you should be able to count the occurences of an item in an array', () => {
    const result = arraysAnswers.count([1, 2, 4, 4, 3, 4, 3], 4);

    expect(result).to.eql(3);
  });

  it('you should be able to find duplicates in an array', () => {
    const result = arraysAnswers.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

    expect(result.sort()).to.eql([1, 3, 4]);
  });

  it('you should be able to find all occurrences of an item in an array', () => {
    const result = arraysAnswers.findAllOccurrences([1, 2, 3, 4, 5, 6, 1, 7], 1);

    expect(result.sort().join(' ')).to.eql('0 6');
  });
});
