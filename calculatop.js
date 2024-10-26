
function add(num1, num2){
    return num1 + num2;
}


function substract(num1, num2){
    return num1 - num2;
}


function multiply(num1, num2){
    return num1 * num2;
}


function devide(num1, num2){
    return num1 / num2;
}

function calculator (a, b, operation){
    if(operation === 'add'){
        const result = add (a,b);
        return result;
    }
    else if(operation === 'substract'){
        const result = substract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(operation === 'devide'){
        const result = devide(a,b);
        return result;
    }
    else{
        return 'this operatin is not working';
    }

}
const calculate = calculator(2,4,'add');
console.log(calculate);