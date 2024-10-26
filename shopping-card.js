const totalItems= [
    {product : 'shirt' , price : 700 ,quantity : 2},
    {product : 'pant' , price : 1200 ,quantity : 4},
    {product : 'chiruni' , price :30 ,quantity : 1},
    {product : 'book' , price : 120  ,quantity : 6}
] 


    function totalPrice (numbers){
        let totalCost = 0;
        for(const number of numbers){
            totalCost = totalCost + (number.price *number.quantity);
        }
        return totalCost;
    }

    const price = totalPrice(totalItems);
    console.log( 'Total price',price);