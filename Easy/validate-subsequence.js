function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    let arrIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length){
        //if item from array, found in sequence array
        if(array[arrIdx] === sequence[seqIdx]){
            //increase the sequence index
            seqIdx++;
        }
        //keep increasing the array index no matter either it matches or not
        arrIdx++;
    }
    return seqIdx === sequence.length;
}
let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));
