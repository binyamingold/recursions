

/**
 * 
 * @param {Array} stringArray - the orginal array
 * @param {Number} index - index on the array
 * @param {Array} UpperCaseArray 
 * @returns The orginal array converted to upperCase
 */
function ConvertStringInArrayToUpperCase(stringArray, index = 0, UpperCaseArray = []){
    if(index >= stringArray.length){
        return UpperCaseArray
    }
    UpperCaseArray.push(stringArray[index].toUpperCase())

    return ConvertStringInArrayToUpperCase(stringArray, index+1, UpperCaseArray)
}

var namesArray = ['avraham' ,'izhhak','yaakov', 'moshe','aharon','yosef', 'a', 'aa', 'abba', 'aba']
var result = ConvertStringInArrayToUpperCase(namesArray)

console.log("Converted to upperCaseArray: " + result)
console.log("Original: " + namesArray)