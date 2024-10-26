

const mobile = [
    {name : 'sumsung' , prices: 25000, camera : '12mp', color :'black'},
    {name : 'sampony' , prices: 15000, camera : '12mp', color :'black'},
    {name : 'iphone' , prices: 250000, camera : '12mp', color :'black'},
    {name : 'realme' , prices: 130000, camera : '12mp', color :'black'},
    {name : 'nokia' , prices:1500, camera : '12mp', color :'black'}
]

function cheapest  (phones){
    let min = phones[0];
    for(const phone of phones){
       if(phone.prices < min.prices){
        min =phone;
       }
    }
   
    return min;
}
const phone = cheapest(mobile);

console.log('lowest price:',phone)