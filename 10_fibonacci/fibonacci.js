const fibonacci = function(index) {
    if ((index == 1) || (index == 2)){
        return(1);
    }
    else if(index < 0){
        return("OOPS");
    }
    else{
    let num1 = 1;
    let num2 = 1
    let next;
    let i = 2;
    while (i < index){
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        i = i+1;
    }
    return(next);  
}
}


// Do not edit below this line
module.exports = fibonacci;
