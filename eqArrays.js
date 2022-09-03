

/**
 * Check if arrays have the same entries
 * 
 * steps
 * 1. Check the lengths are the same
 * 2. Check if each index values are the same for both arrays
 *    a. if not the same. return false
 * 3. Return true if they are the same
 */
const eqArrays = function (arr1, arr2) { //arr1 and arr2 mean eqArrqys[0][1]

  if (arr1.length !== arr2.length) { //check the lengths are the same
    return false
  }
  for (let index = 0; index < arr1.length; index++) {//loop arr1
    if (arr1[index] !== arr2[index]) { //check each arr1[i] and arr2[i] value are the same
      return false
    } //if all correct return true
  }
  return true
}




module.exports = eqArrays;