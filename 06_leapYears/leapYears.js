const leapYears = function(year) {
    /*if(year%100 == 0){
        return year%400 ? false: true;
    }
    else{
        return (year%4) ? false : true;
    }
    */
    return year%4 == 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
