const reverseString = function(string) {
    reverse = '';
    let j = string.length
    for(let i = 0; i < j; i++){
       reverse += string.charAt(string.length - 1);
       string = string.slice(0, -1);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
