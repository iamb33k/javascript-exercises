let values = [];
let remove1;
let remove2;
let remove3;
let remove4;

const removeFromArray = function(values, remove1, remove2, remove3, remove4) {
    let result = [];
    for (const value of values) {
        if (!(value === remove1) && !(value==remove2) && !(value==remove3) && !(value==remove4)) {
            result.push(value);
        };
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
