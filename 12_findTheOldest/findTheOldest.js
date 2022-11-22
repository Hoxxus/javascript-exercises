const findTheOldest = function(peeps) {
  const oldest = peeps.sort((a, b) => {
    const currentYear = (new Date()).getFullYear();
    return ((a.yearOfDeath ?? currentYear) - a.yearOfBirth) - ((b.yearOfDeath ?? currentYear) - b.yearOfBirth);
  });

  return oldest[oldest.length - 1];
}

// Do not edit below this line
module.exports = findTheOldest;

