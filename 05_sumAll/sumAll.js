let int1 = Number;
let int2 = Number;
let result;

const sumAll = function(int1, int2){
    if(!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    if (int1 >= 0 && int2 >=0){
    if (int1 > int2){
        result = int2;
        for (i=int2; i<=int1; i++) {
            result = result + i;
        }
        result = result - int2;
    }
    else if (int2>int1) {
        result = int1;
        for(i=int1; i<=int2; i++){
            result= result + i;
        }
        result = result - int1;
    }
    return result;
}
    else {
        result = "ERROR";
        return result;}


};

// Do not edit below this line
module.exports = sumAll;
