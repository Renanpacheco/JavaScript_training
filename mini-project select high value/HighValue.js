function highValue (arrayOfValues){ // find the highest value in a array of random values, whose size of the array is determined by user
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


function collectValue(form){ // function for capture the user input

    let sizeArray = document.getElementById("size_array").value;
    event.preventDefault();
    let values = [];

    for (let i = 0; i < sizeArray; i++){
        values.push(Math.random());
    }

    console.log(values);
    console.log(highValue(values));
}