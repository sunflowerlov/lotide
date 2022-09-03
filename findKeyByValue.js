// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKeyByValue = function (channel, show){
  let channelArr = Object.keys(channel) //将channel的所有key提取出
  for (const channelKey of channelArr) {//循环得出每一个key
    if (channel[channelKey] === show) {//对比每个key的内容是否与show一样
      return channelKey//如果一样则返回key
    }
  }
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
