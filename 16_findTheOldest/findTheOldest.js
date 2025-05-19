const findTheOldest = function(array) {
    return thing = array.map(person => {
        let age = 0;
        if (!person.yearOfDeath) {
            age = new Date().getFullYear() - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        return {
            name:person.name,
            age:age,
        };
    }).sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
