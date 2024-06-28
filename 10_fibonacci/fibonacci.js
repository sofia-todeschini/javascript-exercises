const fibonacci = function(sequence_number) {
    sequence_number = Number(sequence_number)
    let num1 = 1
    let num2 = 1
    let result = 0
    if (sequence_number === 1 || sequence_number === 2) return 1
    if (sequence_number < 0) return "OOPS"
    for (i = 3; i <= sequence_number; i++) {
        result = num1 + num2
        num1 = num2
        num2 = result
    }
    return result
};

// Do not edit below this line
module.exports = fibonacci;
