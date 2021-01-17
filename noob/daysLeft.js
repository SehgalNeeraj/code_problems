// days Left till a date
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
//////////////////
// MAIN
/////////////////
console.log(
  "*** Days since New Year: " +
    Math.floor((Date.now() - new Date("31-Dec-2020")) / _MS_PER_DAY) +
    " ***"
);
console.log(
  "*** New Year 2022: " +
    Math.floor((new Date("1-Jan-2022") - Date.now()) / _MS_PER_DAY) +
    " days left ***"
);
