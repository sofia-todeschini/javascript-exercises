const reverseString = function(string) {
    // const charList = string.split("");
    // let reversedString = []
    // for (let i = 1; i <= string.length; i++) {
    //     reversedString.push(charList.at(-i))
    // }
    // return reversedString.join("")
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
