

/**
 * 
 * @param {Array} numbrArr - array numbers
 * @param {Number} index - index on the array
 * @param {Array} oddArr - The odd numbers
 * @returns The odd numbers from the numberArr 
 */
function oddOnly(numbrArr, index = 0, oddArr = []) {
    if (index >= numbrArr.length){
        return oddArr;
    }
    if (numbrArr[index] % 2 == 1) {
        oddArr.push(numbrArr[index])
    }
    return oddOnly(numbrArr, index + 1, oddArr)
}

var numbrArr = [1,2,3,4,5,6,7,8,9,10]
console.log("The Original array is: " + numbrArr);

var result = oddOnly(numbrArr)
console.log("The odd numbers in the array are: "+ result)


