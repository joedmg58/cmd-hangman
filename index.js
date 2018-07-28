var Word = require( './Word' );
var inquirer = require( 'inquirer' );


var remainingGuesses = 12;
var newWord;
var guessedLetters;

function randomWord() {
    var words = [
        'Australia',
        'Pacific',
        'Submarine',
        'Coffe',
        'Yellowstone',
        'Publix',
        'Dinosaur',
        'Polynesia'
    ];

    var n = Math.floor(Math.random() * words.length  ) ; 

    return words[n];
}

function start() {
    guessedLetters = [];
    remainingGuesses = 12;
    newWord = new Word( randomWord() );
    newWord.show();
    game();
}


var game = function() {
    
    inquirer.prompt([
        {
            name: 'letter',
            message: 'Guess a letter ? '
        }
    ]).then( function( answer ){

        if ( !( guessedLetters.includes( answer.letter ) ) ) {
            if ( newWord.guessLetter( answer.letter ) ) {
                console.log( '\x1b[32m\x1b[5m%s\x1b[0m', 'CORRECT !' );
                guessedLetters.push( answer.letter );
            } 
            else {
                remainingGuesses --;
                console.log( '\x1b[31m\x1b[5m%s\x1b[0m', 'INCORRECT !!!' );
                console.log( '%s guesses remaining !', remainingGuesses );
            }
        }
        else {
            console.log( 'letter already guessed' );
        }

        newWord.show();

        if ( remainingGuesses > 0 && !newWord.guessed() ) { 
            game(); 
        }
        else { 
            if ( newWord.guessed() ) {
                console.log( '\x1b[32m\x1b[5m%s\x1b[0m', '|  You won !  |' );
            }
            else {
                console.log( '\x1b[31m\x1b[5m%s\x1b[0m', '|  You lose.  |' );
            }

            //ask for playing again
            inquirer.prompt( [
                {
                    name: 'keepPlaying',
                    type: 'confirm',
                    message: 'Do you want to keep playing ? ',
                    default: false
                }
            ] ).then( function( answer ) {
                if ( answer.keepPlaying ) { start(); }
            } );
        }
    });
}

//------------------

console.log( '' );
console.log( 'Node Word Guessing Game. \nUM Coding Boot Camp. Joed Machado. 2018.' );
console.log( '' ); 

start();
