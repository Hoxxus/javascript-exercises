const removeFromArray = function(inputArray, ...removeArgs) {
    let reducedArray = [];

    for (const inputElement of inputArray) {
        let relevantElement = true;

        for (let i = 0; i < removeArgs.length; i++) {
            if (inputElement === removeArgs[i]) relevantElement = false;
        }
        
        if (relevantElement) {
            reducedArray.push(inputElement);
            relevantElement = true;
        }
    }
    return reducedArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
