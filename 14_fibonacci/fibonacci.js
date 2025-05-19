const fibonacci = function(sequence) {
    if (!(sequence >= 0)) { return "OOPS";};
    let fib = [0, 1];
    for (i = 2; i < sequence + 1; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    };
    return fib[sequence];
};

// Do not edit below this line
module.exports = fibonacci;
