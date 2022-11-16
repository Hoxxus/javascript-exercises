// const removeFromArray = function(inputArray, ...removeArgs) {
//     const reducedArray = [];

//     for (const inputElement of inputArray) {
//         let relevantElement = true;

//         for (let i = 0; i < removeArgs.length; i++) {
//             if (inputElement === removeArgs[i]) relevantElement = false;
//         }
        
//         if (relevantElement) {
//             reducedArray.push(inputElement);
//             relevantElement = true;
//         }
//     }
//     return reducedArray; 
// };

// // Do not edit below this line
// module.exports = removeFromArray;

//#####################################################################

// kürzerer Code mit includes() Methode

// const removeFromArray = function(inputArray, ...removeArgs) {
//     const reducedArray = [];
//     for (const inputElement of inputArray) {
//         if (!removeArgs.includes(inputElement)) {
//             reducedArray.push(inputElement);
//         }
//     }
//     return reducedArray; 
// };

// module.exports = removeFromArray;

//#####################################################################

// noch kürzerer Code mit filter() und includes()

const removeFromArray = function(inputArray, ...removeArgs) {
    return inputArray.filter(val => !removeArgs.includes(val));
};

module.exports = removeFromArray;