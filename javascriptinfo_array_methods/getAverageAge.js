let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    };
    return sum / arr.length;
}