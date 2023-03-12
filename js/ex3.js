

/**
 * 
 * @param {Array} arratOfStrings 
 * @returns - new array with all the strings sorted alphabetically 
 */
function SortStrings(arratOfStrings){
    var sortArray = []
    for (var i = 0; i < arratOfStrings.length; i++) {
        sortArray.push(arratOfStrings[i]);   
    }
    return sortArray.sort()
}

var namesArray = ['avraham' ,'izhhak','yaakov', 'moshe','aharon','yosef', 'a', 'aa', 'abba', 'aba']

var result =  SortStrings(namesArray)
console.log("The sorted array is: " + result);
console.log("The original array is: "+ namesArray)
