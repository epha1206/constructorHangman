var letter = function(underliningLetter) {
    this.underliningLetter = underliningLetter;

    this.letterGuessed = false;
    this.reveal = function() {
        if (this.letterGuessed === true) {
            console.log(this.underliningLetter);
        }
        else {
            console.log("_");
        }
    }
    this.check = function(character) {
        if (character === this.underliningLetter) {
            this.letterGuessed = true;
            console.log("You guessed correct!");
            return;
        }

        console.log("That is incorrect. Guess again.");
    }
};

module.exports = letter;