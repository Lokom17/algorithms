'use strict'

const bubbleSort = require('./app/bubblesort.js');
const mergeSort = require('./app/mergesort.js');
const quickSort = require('./app/qsort.js');

const algoritmType = {
    bubbleSort,
    mergeSort,
    quickSort
};



module.exports = algoritmType;