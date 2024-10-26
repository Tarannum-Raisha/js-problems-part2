const heights = [65, 80, 24, 57,20,39,90,153,40,203,3,39];

function maxNumber (number){
    // max dhorar somoy array r moddhe first upadan ta dhorbo
    let max = number[0];
    for(const num of number){
       if(num > max){
       max = num;
       }
    }
    return max;
}

const number = maxNumber(heights);
console.log('max number',number);