let string;
let array = [];
let arrayRev = [];
let arrayJoin = [];

const reverseString = function(string) {
    array = string.split("");
    arrayRev = array.reverse();
    arrayJoin = array.join("");
    return arrayJoin;
};

// Do not edit below this line
module.exports = reverseString;
