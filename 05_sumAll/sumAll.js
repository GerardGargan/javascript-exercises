const sumAll = function(num1, num2) {
    let total = 0;

    if(num1<0 || num2<0){
        return "ERROR";
    }

    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    
    const biggest = (num1>num2) ? num1 : num2;
    const smallest = (num1<num2) ? num1 : num2;

    for(let i=smallest; i<=biggest; i++){
        total += i;
    }

return total;
};

// Do not edit below this line
module.exports = sumAll;
