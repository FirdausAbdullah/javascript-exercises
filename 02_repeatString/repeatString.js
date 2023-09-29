const repeatString = function(string,num) {
    //(typeof toPrint == 'string')? :return("its not a string");
    let repeatedString = '';
    if(num<0)return "ERROR";
    for (let i = 1; i<=num;i++){
        if(string == '') return '';
        repeatedString=repeatedString.concat(string);
    }
    return repeatedString;
};

console.log(repeatString('hey',3));
// Do not edit below this line
module.exports = repeatString;
