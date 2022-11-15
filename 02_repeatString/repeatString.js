const repeatString = function(string, n) {
  
  let returnString = "";
  
  if (n < 0) {
    return "ERROR";
  } else {
    while (n--) {
      returnString += string;
    }
    return returnString;
  }
};


// Do not edit below this line
module.exports = repeatString;
