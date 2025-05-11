const repeatString = function(phrase, amount) {
    if (amount < 0) return "ERROR";
    let sentence = "";
    for (let i = 0; i < amount; i++) {
        sentence = sentence + phrase;   
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
