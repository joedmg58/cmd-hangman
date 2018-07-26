var Letter = require('./Letter');

function Word( str ) {
    this.letters = [];
    
    for ( var i = 0; i < str.length; i++ ) {
        var letter = new Letter( str[i] );
        this.letters.push( letter );
    }
}

Word.prototype.show = function() {
    var tmp = [];
    for ( var i=0; i<this.letters.length; i++ ){
        tmp.push( this.letters[i].toString() );
    }
    return tmp.join(' ');
}

Word.prototype.guessLetter = function( letter ) {
    var guessed = false;
    for ( var i=0; i<this.letters.length; i++) {
        guessed = ( this.letters[i].guess( letter ) || guessed );
    }
    return guessed;
}

module.exports = Word;