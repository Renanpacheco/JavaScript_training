// change values of two variables and return then in a array
function change(x,y,array){
    let temp = x;
    x = y;
    y=temp;
    array.push(x)
    array.push(y)
    return array;
}

let var_1 = "red";
let var_2 = "blue";
let reponse = [];
let result;

console.log(var_1,var_2);

result = change(var_1,var_2,reponse);

if (result === 1){
    console.log("Values changed: " + reponse);

}else{
    console.log("error")
}
