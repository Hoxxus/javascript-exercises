const reverseString = function(string) {
    const stringToArray = string.split("");
    const reversedArray = stringToArray.reverse();
    return reversedArray.join("");
    // return string.split("").reverse().join(""); Kann in eine Zeile zusammengefasst werden.
};

// Do not edit below this line
module.exports = reverseString;
