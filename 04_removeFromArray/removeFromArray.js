const removeFromArray = function(array, ...args) {
//     let newArray = []
//     array.forEach((elem) => {
//         if (!args.includes(elem))
//             newArray.push(elem)
// })
// return newArray
return array.filter((elem) => !args.includes(elem))

};

// Do not edit below this line
module.exports = removeFromArray;
