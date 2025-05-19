const palindromes = function (sentence) {
    sentence = sentence.toLowerCase();
    let array = sentence.split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890"
    array = array.filter((check) => alphabet.includes(check));
    let temp = [];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        temp[i] = array[len - i - 1];
    };
    if (temp.toString() == array.toString()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
