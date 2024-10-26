

const totalItems= [
    {product : 'shirt' , price : 700},
    {product : 'pant' , price : 1200},
    {product : 'chiruni' , price :30},
    {product : 'book' , price : 120}
]


function items (products){

    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }

    return sum;
}

const total = items(totalItems);
console.log('ajk taka khoshabe :' ,total);