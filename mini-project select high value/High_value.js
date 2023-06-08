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


function collectValue(e){
    e.preventDefault();
    let aux =document.getElementById("size_array");
    let size = aux.value;
    console.log(size)
    //document.getElementById("capture").innerHTML = size;
    
}

/*
let size = Math.random()* (10 -1)+1;
console.log(size);
let values = [];

//document.getElementById("capture").innerHTML = size;
console.log(values);
for (let i = 0; i < size; i++){
    values.push(Math.random());
    

}

console.log(values);
console.log(highValue(values));
*/




/*
let sizeOfArray = document.querySelector("#send");
sizeOfArray.addEventListener("click", function(e){

    e.preventDefault();

    let entry= document.querySelector("#size_array");
    //console.log(entry.value)

    //let size= entry.value;
    //console.log(size);

});

*/


// values used to test the function
/*let result;
let values= [0,15,4,7,1];
console.log(values);
result = highValue(values);
console.log(result);

let values2= [-8,-15,-4,-1,-11];
console.log(values2);
result = highValue(values2);
console.log(result);

let empty= [];
console.log(empty);
result = highValue(empty);
console.log(result);
*/
//future implementaion with a strings
/*let values4= ['Test','Sarah','Biggest','none'];
console.log(values4);
result = highValue(values4);
console.log(result);
*/