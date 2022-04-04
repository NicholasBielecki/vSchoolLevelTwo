var readlineSync = require('readline-sync')

let hasStar = "does not have star"

//constructor

class player{

    constructor(name, coins, status, star, character){
        this.name = name
        this.coins = 0
        this.status = status
        this.star = false
    }

//constructor functions

setName(namePicked){
    if(namePicked === "M"){
        this.name = "Mario"
    }
    else{
        this.name = "Luigi"
    }
}

gotHit(){
    if(this.status === "powered up" && this.star === true){
        this.star = false
        console.log(`\nYou got hit but the star protected you\n`)
        hasStar = "does not have a star"
    }
    else if(this.status === "powered up" && this.star === false){
        this.status = "big"
        console.log(`\nYou got hit\n`)
    }
    else if(this.status === "big"){
        this.status = "small"
        console.log(`\nYou got hit\n`)
    }
    
    else if(this.status === "small"){
        console.log(`\nYou got hit\n`)
        this.status = "dead"
    }
}

gotPowerUp(){
    if(this.status === "powered up"){
        this.star = true
        hasStar = "You have a star"
        console.log(`\nYou found a star!\n`)
    }
    else if(this.status === "big"){
        this.status = "powered up"
        console.log(`\nYou powered up\n`)
    }
    else if(this.status === "small"){
        this.status = "big"
        console.log(`\nYou powered up\n`)
    }    
}

addCoin(){
    this.coins ++
    console.log(`\nYou found a coin\n`)
}

print(){
    console.log(this)
}
}

//Intro

let userCharacter = readlineSync.question("Press M if you want to play as Mario or L for Luigi")

const newName = new player(userCharacter, 0, "powered up")
// newName.setName(userCharacter)


//Character Action
let timer = setInterval(characterAction, 1500)

function characterAction(){
    

    randomNumber =  Math.floor(Math.random() *3)
    if(randomNumber === 0){
       newName.gotHit()
    }
    else if(randomNumber === 1){
       newName.gotPowerUp()
    }
    else if (randomNumber === 2){
        newName.addCoin()
    }

    //win or die conditions
    if(newName.status === "dead"){
        clearInterval(timer)
        console.log(`You messed up and died bro`)
        return;
    }   
    if(newName.coins === 6){
        clearInterval(timer)
        console.log(`${newName.name} found the princess!`)
        return;
    }
    const  {name, coins, status} = newName
    console.log(`\nYou are ${name} \nYou have ${coins} coins \nYour current status is ${status} \nand ${hasStar}\n`)
}
