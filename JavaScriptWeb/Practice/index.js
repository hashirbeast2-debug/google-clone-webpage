/*let person = {
        name: "hashir",
        age: 20,
        country: "Pakistan"
}
function logData(){
    console.log(person.name + " is "+person.age + " years old and lives in " + person.country)
}
logData() */

/*let largeCountries = ["China","USA","IND","PAK"]

for(let i=0;i<largeCountries.length;i++){
    console.log(largeCountries[i])
}*/

/*let largeCountries = ["Tuvalu","USA","INDO","IND","MONACO"]
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries) */

let hands = ["rock","paper","scissors"]

function randomHand(){
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log(randomHand())
