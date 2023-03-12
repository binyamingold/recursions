
/**
 * 
 * @param {Array} namesArray - orginal array
 * @param {Number} index - for stoping recursion  
 * @param {Array} arrayStartA - new array for result
 * @returns - The words that begin with the letter A in the orginal array  
 */
function StartsWithA(namesArray, arrayStartA = [], index = 0){
    if(index >= namesArray.length){
        return arrayStartA
    }
    if(namesArray[index][0]==='a')
    {
        arrayStartA.push(namesArray[index])
    }
    return StartsWithA(namesArray, arrayStartA, index+1)
}



var namesArray = ['avraham' ,'izhhak','yaakov', 'moshe','aharon','yosef', 'ana']
console.log("The Original array is: " + namesArray);

var result = StartsWithA(namesArray)
console.log("The words that begin with the letter A in the array are: "+ '\n' + result)
