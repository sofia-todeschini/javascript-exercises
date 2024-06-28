const findTheOldest = function(peopleArray) {
    const thisYear = new Date().getFullYear()
    let maxAge = 0;
    let maxIndex = 0;

    for (let i = 0; i < peopleArray.length; i++) {
        let age;
        if (!("yearOfDeath" in peopleArray[i])) age = thisYear - peopleArray[i].yearOfBirth
        else age = peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth
        if (age > maxAge) {
            maxAge = age
            maxIndex = i
        }
    }
    return peopleArray[maxIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
