const sumAll = function(numX, numY) {
    let sum = 0; 
    if (numX < 0 || numY < 0) {
        sum = 'ERROR';
    }
    else if (typeof numX != 'number' || typeof numY != 'number') {
        sum = 'ERROR';
    }
    else if (numX < numY) {
        for (i = numX; i<=numY; i++) {
            sum = sum + i;
        }
    }
    else if (numY < numX) {
        for (i= numY; i<=numX; i++) {
            sum = sum + i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
