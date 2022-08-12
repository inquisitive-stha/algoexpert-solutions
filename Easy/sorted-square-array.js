function sortedSquaredArray(array) {
    let sortedSquares = new Array(array.length).fill(0);
    let smallerValueIdx = 0;
    let largerValueIdx = array.length - 1;

    //inside this loop idx travels from the highest index to lowest
    for(let idx=array.length-1;idx>=0;idx--){
        let smallerValue = array[smallerValueIdx];
        let largerValue = array[largerValueIdx];

        //since first index is the highest one, it fills data first at last index
        if( Math.abs(smallerValue) > Math.abs(largerValue) ){
            sortedSquares[idx] = smallerValue * smallerValue;
            smallerValueIdx++;
        }else{
            sortedSquares[idx] = largerValue * largerValue;
            largerValueIdx--;
        }
    }
    //since all the square root value are always in ascending order, no need to resort it again
    return sortedSquares;
}

let array = [1, 2, 3, 5, 6, 8, 9];

console.log(sortedSquaredArray(array));