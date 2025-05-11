const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;

    if (typeof firstNumber == "string" || typeof secondNumber == "string" ||
        firstNumber < 0 || secondNumber < 0 || firstNumber !== Math.round(firstNumber) ||
        secondNumber !== Math.round(secondNumber)
    ) return "ERROR";
    
    for (let i = Math.min(firstNumber,secondNumber); i < Math.max(firstNumber,secondNumber) + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
