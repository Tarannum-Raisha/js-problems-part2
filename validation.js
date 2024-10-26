function multiply (num1 , num2 ){
     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'give a valid number'
     }


    const mult = num1* num2;
    return mult;
}

const num = multiply(2 , 'one');
console.log(num);


function fullName (first, second){
     if( typeof first !== 'string' || typeof second !== 'string'){
        return 'please give a string number'
     }
    const full = first + ' ' + second;
    return full;
}
const name = fullName('abul', 'kabul');
console.log(name);

function getFirst (numbers){
    console.log(typeof numbers);
    if(typeof numbers !== 'object'){
        return 'please give an object'
    }
    const price =  numbers.price;
    return price;

}
const object = {home: 'maijdi' , price: 23 , name: 'kazi colony'  }
const firstObject = getFirst(object);
console.log(firstObject);


function getSecond (numbers){
    if(Array.isArray(numbers) === false){
        return 'please give an array'
    }
    const second = numbers[2];
    return second;

}
const second = getSecond ([34, 25, 54,35]);
console.log(second);