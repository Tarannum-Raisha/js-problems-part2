

const prices = [12000, 3000,2400000,46000,45600,200000];

function minPrice (numbers){

    let min = numbers[0];
   for(const num of numbers){
   
    if(num < min ){
        min = num;
    }
    
   }
   return min;
}

const minNumber = minPrice(prices);
console.log('lowest price :',minNumber);