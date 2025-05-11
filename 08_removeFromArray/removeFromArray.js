const removeFromArray = function(inputArray, ...toRemove) {
    for (let i = 0; i < toRemove.length; i++) {
        while (inputArray.indexOf(toRemove[i]) >= 0) {
            inputArray.splice(inputArray.indexOf(toRemove[i]),1);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
