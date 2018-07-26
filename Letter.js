function Letter( value ) {
    this.value = value;
    this.guessed = false;
}

Letter.prototype.toString = function() {
    if ( this.guessed ) {
        return this.value;
    }
    else {
        return '_';
    }
}

Letter.prototype.guess = function( letter ) {
    if ( letter.toLowerCase() === this.value.toLowerCase() ) { this.guessed = true } else { this.guessed = false }
    return this.guessed;
}

module.exports = Letter;