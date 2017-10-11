'use strict';

const algo = require('../index.js');

describe('bubbleSort', function() {
    it('should return empty array when empty array was passed', function() {
        algo.bubbleSort([]).should.be.eql([]);
    });

    it('should return sorted array if sorted array was passed', function() {
        algo.bubbleSort([2,3,1,4]).should.be.eql([1,2,3,4]);
    });

    it('should sort array', function() {
        algo.bubbleSort([11, 55, 66, 22, 33, 44]).should.be.eql([11, 22, 33, 44, 55, 66]);
    })

})