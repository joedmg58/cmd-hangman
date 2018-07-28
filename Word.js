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
    return console.log( tmp.join(' ') );
}

Word.prototype.guessLetter = function( letter ) {
    var guessed = false;
    for ( var i=0; i<this.letters.length; i++) {
        if ( !this.letters[i].guessed ) {
            guessed = ( this.letters[i].guess( letter ) || guessed );
        } 
    }
    return guessed;
}

Word.prototype.guessed = function() {
    var guessed = true;
    for ( var i=0; i<this.letters.length; i++ ) {
        guessed = ( this.letters[i].guessed && guessed );
    }
    return guessed;
}

module.exports = Word;