const palindromes = function (phrase) {
  const regex = /[A-Za-z]+/g;
  const arr = [...phrase.matchAll(regex)];
  const pali = arr.join("").toLowerCase();
  const paliReverse = pali.split("").reverse().join("");

  return (pali === paliReverse); 
};


// Do not edit below this line
module.exports = palindromes;
