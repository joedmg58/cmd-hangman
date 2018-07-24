function Letter( value ) {
    this.value = value;
    this.guessed = false;
}

Letter.prototype.toString = function() {

}

Letter.prototype.guess = function( letter ) {
    if ( letter === this.value ) { this.guessed = true } else { this.guessed = false }
    return this.guessed;
}