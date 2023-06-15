function fizzBuzz(entry){ // returns a result if a entry is divisible by three with the word "fizz", or divisible by 
    //five with the word "buzz", divisible by both 3 and 5 with the word "fizzbuzz", if it isn't divisible return the value of
    //or error if the entry isn't a number
    let div3;
    let div5;
    if (isNaN(entry)){
        return "error";
    }else{
        div3= entry % 3;
        div5= entry % 5;
        
        if ((div3 === 0) && (div5 === 0)){
            return "FizzBuzz";
        }else if(div3 === 0){
            return "Fizz";            
        }else if(div5 === 0){
            return "Buzz";

        }else{
            return entry;
        }
    }
}

function fizzBuzzArray(sizeArray){ // create a new array with the size informated, and fill it with sequentials numbers begin in 1 and obeys the rules of FizzBuzz
    if(sizeArray <= 0){
        return "size invalid, please input other size";
    }

    let array = [];
    for(let i = 0; i < sizeArray; i++){
        array.push(fizzBuzz(i+1));
    }
    return array;

}

/*
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(1));
console.log(fizzBuzz("h"));*/

console.log(fizzBuzzArray(150));