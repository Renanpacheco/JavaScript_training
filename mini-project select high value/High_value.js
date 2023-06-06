function highValue (arrayOfValues){ // find the highest value in a array of values
    let bigger=arrayOfValues[0];

    if (arrayOfValues.length === 0){
        return "error: empty array";
    }else{

        for (i in arrayOfValues){
            if (bigger < arrayOfValues[i]){
                bigger= arrayOfValues[i]
            }
        }

        return bigger;

    }

}

let result;
let values= [0,15,4,7,1];
console.log(values);
result = highValue(values);
console.log(result);

let values2= [-8,-15,-4,-1,-11];
console.log(values2);
result = highValue(values2);
console.log(result);

//future implementaion with a strings
/*let values3= ['Test','Sarah','Biggest','none',123456789];
console.log(values3);
result = highValue(values3);
console.log(result);
*/