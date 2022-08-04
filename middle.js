

const middle = function (input){
  let result = []
  if (input.length <= 2) {
    return result
  }
  else if (input.length % 2 !== 0){
    result.push(input[Math.floor(input.length / 2 )])
    console.log(result)
    return result
  }
  else {
    result.push(input[Math.floor((input.length - 1) / 2)], input[Math.floor((input.length - 1) / 2) + 1])
    console.log(result)
    return result
  }
}



module.exports = middle;
