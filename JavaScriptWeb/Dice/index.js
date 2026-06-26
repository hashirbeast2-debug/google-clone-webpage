function rollDice(){
    let diceValue = Math.floor(Math.random()*6)+1
    return diceValue
}
console.log(rollDice())
// 0.00000000000001 - 5.9999999999999999
// 0 - 5
// 1 - 6