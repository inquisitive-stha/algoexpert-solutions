function nonConstructibleChange(coins) {
    coins.sort((a,b) => a-b);
    let change = 0;
    if(coins.length === 0) return 1;
    for(let i=0; i<coins.length; i++){
        if(coins[i] > change+1){
            break;
        }
        change += coins[i];
    }
    return change+1;
}

// const coins = [5, 7, 1, 1, 2, 3, 22];
const coins = [1, 1, 1, 1, 1];
console.log(nonConstructibleChange(coins));