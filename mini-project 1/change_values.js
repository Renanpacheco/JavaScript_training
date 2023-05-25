// change values of two variables
// expected to improve for execution in a function

let var_1 = "red";
let var_2 = 5;
let temp;
console.log(var_1,var_2);

temp = var_1;
var_1 = var_2;
var_2=temp

console.log("Values changed: " + var_1,var_2);