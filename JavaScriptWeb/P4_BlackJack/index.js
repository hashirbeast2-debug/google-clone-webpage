let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false    // Initailly Flase as we dont have BlackJack from start
let isAlive = true          //Initially True as we are Alive not out
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

//Creating Objects of player name and player chips
let player = {
        name : "Hashir",
        chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){      // To Get Random Cards Values
       let randomNumber = Math.floor(Math.random() * 13)+1
       if(randomNumber > 10){
        return 10
       }else if(randomNumber === 1){
        return 11
       }else{
        return randomNumber
       }
}

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for(let i = 0;i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){                         //triple = used so if someone even use string 21 still it will workS
        message = "Wohoo! You've got a Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    } 
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck")
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        console.log(cards)
        renderGame()
    }
}

function newGame(){
    if(isAlive === false || hasBlackJack === true){
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        hasBlackJack = false
        isAlive = true
        message = ""
        messageEl.textContent = "Want to play a round?"
        cardsEl.textContent = "Cards: "
        sumEl.textContent = "Sum: "
    }
}
