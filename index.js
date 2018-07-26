var Word = require( './Word' );
var inquirer = require( 'inquirer' );

var remainingGuesses = 12;

var newWord = new Word( 'Mesopotamia' );

console.log( newWord.show() );

console.log( newWord.guessLetter( 'm' ) );

console.log( newWord.show() );