

function woodQuantity (chairQuantity , tableQuantity , bedQuantity){
    const perChairWood =  10;
    const perTableWood = 15;
    const perBedWood = 50;
    const chairTotalWood = perChairWood * chairQuantity;
    const tableTotalWood = perTableWood *tableQuantity;
    const bedTotalWood = perBedWood * bedQuantity;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity( 12,2,3);
console.log('numbers of wood',wood);