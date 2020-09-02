"use strict";
function getSum(num1, num2) {
    // the last number type referes to the return type value
    return num1 + num2;
}
// console.log(getSum('6', 3));
let mySum = function (num1, num2) {
    if (typeof num1 == "string")
        num1 = parseInt(num1);
    if (typeof num2 == "string")
        num2 = parseInt(num2);
    return num1 + num2;
};
console.log(mySum("6", 3));
function getName(firstName, lastName) {
    //lastName became optionl here with ?
    if (lastName == undefined)
        return firstName;
    return firstName + " " + lastName;
}
console.log(getName("Nujood"));
function myVoid2() {
    return;
}
