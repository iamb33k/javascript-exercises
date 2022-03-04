let string;
let i;
let top;

const repeatString = function(string, top) {
    let stringOut = '';
    if (top < 0){
        stringOut = 'ERROR';
    }
    else {
    for (i = 1; i <= top; i++) {
    stringOut = stringOut + string;
    }
}
return stringOut;
}


// Do not edit below this line
module.exports = repeatString;
