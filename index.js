var word = require("./word.js");
var inquirer = require("inquirer");

var words = [
    "bird",
    "dog",
    "fish",
    "lizard"
];

var user = new word(words);
var dashed = user.randomWord();

function askQuestion() {
    inquirer.prompt([
        {
            type: "input",
            name: "character",
            meassage: "Guess a letter!"
        }
    ])
    .then(function (answers) {
        var character = answers.character;
        const userAnswer = answers.character;

        if (user.word.includes(userAnswer)) {
            var index = user.word.indexOf(userAnswer);
            dashed[index] = userAnswer;
            console.log("Here is the word for you to guess " + dashed);
            var guessword = dashed.join("");

            if (guessword === user.word) {
                console.log("You Win!!!");
            }
            else {
                askQuestion();
            }
        } else {
            console.log("Sorry, that is incorrect.");
            askQuestion();
        }
    });
}

askQuestion();