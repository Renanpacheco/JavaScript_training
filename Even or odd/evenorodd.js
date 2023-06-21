function evenOrOdd (limit){ // returns a array with Even or Odd elements based in the position of the array
    let array = [];
    for (let i=0; i < limit; i++) {
        if ( i % 2 === 0){
            array.push("Even");
        }else{
            array.push("Odd");
        }

    }
    return array;

}


function collectValue(form){ // function for capture the user input and print the result without a formatation

    let sizeArray = document.getElementById("size_array").value;
    event.preventDefault();

    console.log(sizeArray);
    let response = "The array is " + evenOrOdd(sizeArray);
    document.getElementById('capture').innerHTML = response; 
}