const repeatString = function(string, number) {
    let str = string;
    for(let i = 1; i < number; i++){
        str += string;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
