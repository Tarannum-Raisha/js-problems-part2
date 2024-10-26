/**
 * first100 ---> 100;
 * 101 to 200 ---> 90;
 * avobe200 ---> 80;
 * 
 */


function layerdeDiscountTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 80;

    if(quantity <= 100){
        const total = quantity* first100Price;
        return total;
    }
    else if( quantity <= 200){
        const secondPrice = quantity - 100;
        const total = first100Price*100 + secondPrice*second100Price;
        return total;
    }
    else{
        const thirdPrice = quantity -200;
        const total = first100Price*100 +  second100Price*100 +above200Price*thirdPrice;
        return total;
    }


}

const total = layerdeDiscountTotal(300);
console.log('total price', total);