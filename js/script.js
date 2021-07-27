const guessedLettersList = document.querySelector (".guessed-letters");//The list of guessed letters
const guessButton = document.querySelector (".guess"); //The guess button
const playerGuess = document.querySelector (".letter") //The player input field
const wordProgress = document.querySelector (".word-in-progress"); //Paragraph showing the word as it progresses
const remaining = document.querySelector (".remaining"); //Paragraph with number of remaining guesses
const numRemaining = document.querySelector ("span"); //Actual number remaining
const message = document.querySelector (".message"); //paragraph of messages to the player
const againButton = document.querySelector (".play-again"); //button to play again
const word = "magnolia"; //My test word
const guessedLetters = [];

const letterPlaceHolders = function (word) {
    const placeHolderArray = []; //Creates the initial array and populates with the dot
    for (const letter of word) { 
        placeHolderArray.push("●");
        console.log(letter); //so I can see it in the console when I call the function
    }
    wordProgress.innerText = placeHolderArray.join(""); //This makes it a string again so it shows up in paragraph
};
 
letterPlaceHolders(word);

guessButton.addEventListener ("click", function(e) {
 e.preventDefault();
 const guess = playerGuess.value; 
 console.log(guess);
 playerGuess.value = ""; 
 const goodGuess = validGuess(guess); //running the validation function and saving the final return to a variable.
    if (goodGuess) { //if we get a result from the validator, then run the makeGuess function
        makeGuess(guess); 
    }
});


const validGuess = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input === "") {
        message.innerText = "Please enter one letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter only one letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "That is not a letter.";
    } else {
        message.innerText = "";
        return input;
    }
};

const makeGuess = function (letter) { //This function is saving the player's guess to an array and checking it for duplicates
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)) {
        message.innerText = "You've already guessed that letter. Try again."
    } else {
        guessedLetters.push(letter);
    }
    console.log(guessedLetters);
}










