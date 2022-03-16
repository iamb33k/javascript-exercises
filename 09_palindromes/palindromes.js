const palindromes = function (string1) {
    string1 = string1.toLowerCase()
    string1 = string1.replace(/[.,#!]/g,"")
    string1 = string1.replace(/\s+/g,'');
    array1 = string1.split("");
    array1 = array1.reverse();
    array1 = array1.join("");
    if (string1 == array1){
        return(true);
    }
    else{
        return(false);
    }
}
// Do not edit below this line
module.exports = palindromes;
