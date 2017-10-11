const merge = (xs, ys) => {
    if (xs.length === 0) return ys;
    if (ys.length === 0) return xs;
    const x = xs[0];
    const y = ys[0];

    return (x < y)
        ? [x, ...merge(xs.slice(1), ys)]
        : [y, ...merge(xs, ys.slice(1))];
}

const mergeSort =(A) => {
    if (A.length < 2) return A;
    const middle = Math.floor(A.length / 2);
    const leftHand = A.slice(0, middle);
    const rightHand = A.slice(middle);
    return merge(mergeSort(leftHand), mergeSort(rightHand));
}

module.exports = mergeSort;