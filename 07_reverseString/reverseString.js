const reverseString = function(inputText) {
    let reversedText = "";
    for (let i = 1; i < inputText.length + 1; i++) {
        reversedText += inputText[-i];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
