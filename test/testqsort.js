'use strict';

const algo = require('../index.js');


describe('quickSort', () => {
    it('should sort array with two element', () => {
        algo.quickSort([2,3]).should.be.eql([2,3]);
    });
    it('should sort array with five element', () => {
        algo.quickSort([7, 2, 5, 10, 1]).should.be.eql([1, 2, 5, 7, 10]);
    });
    it('should sort array with four element', () => {
        algo.quickSort([3, 4, 7, 3]).should.be.eql([3, 3, 4, 7]);
    });
});
