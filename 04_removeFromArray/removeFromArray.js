const removeFromArray = function(array, ...toRemove) {

    if(toRemove==="" || toRemove===null || toRemove ===undefined){
        return array;
    } else {
    
        const newArray = [];

        for(value of array){
            if(!toRemove.includes(value)){
                newArray.push(value);
            }
        }

        return newArray;
    }
        
    };

// Do not edit below this line
module.exports = removeFromArray;
