var letters = require("./letter.js");
var character = require("./index.js");

var word = function(words) {
    this.lettersArray = [];
    this.addLetter = function(underliningLetter) {
        this.lettersArray.push(new letters(underliningArray));
    };

    this.returnString = function() {
        letters.prototype.toString = function() {
            this.reveal();
            console.log(lettersArray.join(','));
        }
    }
    this.character = function(character) {
        letters.prototype.toString = function(character) {
            this.check(character)
        }
    };

    this.word = "";

    this.randomWord = function() {
        this.word = words[Math.floor(Math.random() * words.length)];

        var answerArray = [];

        for (var i = 0; i < this.word.length; i++) {
            answerArray[i] = "_";
        };
        console.log("Here is the word for you ton guess " + answerArray);
        return answerArray; 
    };
};
module.exports = word;