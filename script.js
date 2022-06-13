console.log(`Welcome to the Guess Game. You are to guess a number in a given range. \n\n A correct guess gives 5 points and moves you to the next stage. Good luck`);

//const prompt = require('prompt-sync')();

let userName = prompt("Hello! Please enter your name: ");
let a = userName;

//document.cookie = "a"; why did my cookie not work???

//next declare variables that would hold the number ranges, score and next stage...

let gameScore = 0;
var startNo = 1;
var stopNo = 3;
let nextStage = 0;
let takeStep = true;
let guess = 0;

function gameFunction(){
    while(takeStep){
        console.log(`welcome to Stage ${++nextStage}`);// shows incrememnted stage

        guessNumber= Math.floor(Math.random()*stopNo)+1;//randomly picks a number, stores it in guessNumber

        console.log(`We have Picked a number between ${startNo} and ${stopNo}. Guess correctly what number it is`);

        guess = parseInt(prompt());//prompt user to enter decimal number

        if(guess === guessNumber ){
            gameScore +=5; 
           
            console.log(`Congratulations ${a}!!! You have ${gameScore} points`);
        }
        else{
            console.log(`Sorry ${a}, You got it wrong. The correct number was ${guessNumber}\nYou have a total of ${gameScore} points. better luck next time!`);
            break;
        }
    }
}

gameFunction();

console.log('\n\nTHANK YOU!!! PLAY AGAIN SOMETIME');

