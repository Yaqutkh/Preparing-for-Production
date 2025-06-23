import { expect } from 'chai';
import { shuffle } from '../src/Shuffle.js';

describe('shuffle function', () => {
  it('should rearrange elements in array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]);

    expect(shuffledArray).to.have.members(originalArray);
    expect(JSON.stringify(shuffledArray)).to.not.equal(JSON.stringify(originalArray));
  });
});
