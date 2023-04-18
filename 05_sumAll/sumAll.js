const sumAll = function (x, y) {
    if (
        x < 0 ||
        y < 0 ||
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        return 'ERROR';
    }
    
    var sum = 0;
    if (x < y) {
        for (x; x <= y; x++) {
            sum += x;
        }
    } else {
        for (y; y <= x; y++) {
            sum += y;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
