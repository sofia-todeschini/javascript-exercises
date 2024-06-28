const palindromes = function (phrase) {
    let letters = []
    phrase.split("").forEach((char) => {
        if (!('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.includes(char) || char === " "))
            letters.push(char.toLowerCase())
    })
    for (i = 0; i <= Math.ceil(letters.length / 2); i++) {
        if (letters.at(i) !== letters.at(-1 * (i+1)))
            return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
