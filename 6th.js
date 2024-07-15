function isLeapYear(year) {
    // Leap year if divisible by 4
    // Except if divisible by 100 but not by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test cases
const year1 = 2020;
const year2 = 2021;
const year3 = 2000;
const year4 = 1900;

console.log(year1 + " is a leap year? " + isLeapYear(year1)); // true
console.log(year2 + " is a leap year? " + isLeapYear(year2)); // false
console.log(year3 + " is a leap year? " + isLeapYear(year3)); // true
console.log(year4 + " is a leap year? " + isLeapYear(year4)); // false
