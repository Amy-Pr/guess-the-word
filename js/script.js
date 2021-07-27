const guessedLetters = document.querySelector (".guessed-letters");//The list of guessed letters
const guessButton = document.querySelector (".guess"); //The guess button
const playerGuess = document.querySelector (".letter") //The player input field
const wordProgress = document.querySelector (".word-in-progress"); //Paragraph showing the word as it progresses
const remaining = document.querySelector (".remaining"); //Paragraph with number of remaining guesses
const numRemaining = document.querySelector ("span"); //Actual number remaining
const message = document.querySelector (".message"); //paragraph saying guessed right or wrong
const againButton = document.querySelector (".play-again"); //button to play again
const word = "magnolia"; //My test word


const letterPlaceHolders = function (word) {
    const placeHolderArray = []; //Creates the initial array and populates with the dot
    for (const letter of word) { 
        placeHolderArray.push("●");
        console.log(letter); //so I can see it in the console when I call the function
    }
    wordProgress.innerText = placeHolderArray.join(""); //This makes it a string again show it shows up in paragraph
};
 
letterPlaceHolders(word);

guessButton.addEventListener ("click", function(e) {
 e.preventDefault();
 //const guess = playerGuess.value; I don't know why I need to make another variable for this.
 console.log(playerGuess.value);
 playerGuess.value = ""; 
});







