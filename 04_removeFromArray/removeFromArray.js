const removeFromArray = function(testArray, ...toRemove) {
    
    let removeArray = Array.from(toRemove);
    let newArray = [];
    let equal;
    for(let i =0; i<testArray.length;i++){
       
        for(let j=0 ; j<toRemove.length; j++){
            
            if (testArray[i]===toRemove[j]){
                equal = 1;
            }

        }
        if (equal == 1){equal=0;}
        else{
            
            newArray.push(testArray[i]);
            
        }
    }

    return newArray;
};

//removeFromArray([1,2,3,4],2,3);

// Do not edit below this line
module.exports = removeFromArray;
