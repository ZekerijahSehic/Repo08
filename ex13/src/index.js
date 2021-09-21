// Only change code below this line
function randomRangeNumber(minNumber, maxNumber){
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber;
    console.log(randomNumber);
}
randomRangeNumber(1, 10);
// Only change code above this line
module.exports = randomRangeNumber;