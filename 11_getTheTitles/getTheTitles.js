const getTheTitles = function(bookArray) {
    // let titleArray = []
    // bookArray.forEach((elem) => {
    //     titleArray.push(elem.title)
    // })
    // return titleArray
    return bookArray.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
