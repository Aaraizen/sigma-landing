let minNum = 1;
let maxNum = 100;
let randomNumber = Math.floor((Math.random()*(maxNum-minNum)+1));

console.log(randomNumber);
guessed = window.prompt('Give me a number');
if(randomNumber == guessed){
    console.log('You are correct!')
}
else(
    console.log('You are incorrect!')
)