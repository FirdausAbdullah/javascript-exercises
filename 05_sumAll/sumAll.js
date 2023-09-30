const sumAll = function(numA,numB) {
    let total = 0;
    let num1, num2;
    let numArray = [];
    //make a new array of numbers ranging from num1 to num2
        //must check if num1>2 or owise - can work both ways
        //then create the array
    if(numA < 0 || numB <0 || typeof numA != 'number' || typeof numB != 'number') {return "ERROR"};

    if(numA > numB) {
        num1 = numB;
        num2 = numA;
    }
    else if(numB > numA){
        num1 = numA;
        num2 = numB;
    }

    for(let i=num1; i<=num2; i++){
        numArray.push(i);
    }

    for(let iterate of numArray){
        total += iterate;

    }
    
    //loop that array and add to the total variable.

    return total;

};
// Do not edit below this line
module.exports = sumAll;
