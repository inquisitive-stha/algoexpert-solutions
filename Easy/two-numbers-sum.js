// O(n) Time | O(n) Space
function twoNumberSum(array, targetSum) {

    //keep track of already tested number
    const seen = new Set();

    for(let num of array){
        //complement is the required number that need to sum up with current num to achieve the target sum
        const complement = targetSum - num;

        //if the complement is in array, then adding these two will give you the target sum
        if(seen.has(complement)){
            return [num, complement];
        }

        seen.add(num);
    }

    return [];
}

//test case
let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumberSum(array, targetSum));
