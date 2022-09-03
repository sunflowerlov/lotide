const assertEqual = require('./assertEqual')

const findKey = function (object, callback) {
  const key = Object.keys(object)

  for (const eachKey of key) {
    const name = object[eachKey]
    //console.log(name.stars)
    //console.log(callback(name))
    if (callback(name)){
      console.log(eachKey)
      return eachKey
    }
  }
}

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma")

module.exports = findKey;