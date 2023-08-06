const reverseString = function(string) {
    let reversed = "";

    // for(let i = string.length-1; i>=0; i--){
    //     reversed += string[i];
    // }

    // return reversed;

    if(string.length<=1){
        return string;
    } else {
        return reverseString(string.substring(1))+string.charAt(0);
    }

};

// Do not edit below this line
module.exports = reverseString;
