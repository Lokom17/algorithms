'use strict';

const algo = require('../index.js');


describe('mergeSort', () => {
    it('should sort array with two element', () => {
        algo.mergeSort([2,3,1,4]).should.be.eql([1,2,3,4]);
    });
    it('should sort array with five element', () => {
        algo.mergeSort([7, 2, 5, 10, 1]).should.be.eql([1, 2, 5, 7, 10]);
    });
    it('should sort array with four element', () => {
        algo.mergeSort([3, 4, 7, 3]).should.be.eql([3, 3, 4, 7]);
    });
});
