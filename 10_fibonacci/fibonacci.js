const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return 'OOPS';
    else if (n == 1) return 1;
    let firstNum = 0;
    let secondNum = 1;
    let output;
    for (i=0; i < n - 1; i++) {
        i % 2 == 0 ? firstNum = firstNum + secondNum : secondNum = secondNum + firstNum;
        i % 2 == 0 ? output = firstNum : output = secondNum;
    }
    return output;
};

// Do not edit below this line
module.exports = fibonacci;
