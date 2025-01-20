let guessedWordDiv = document.querySelector('#word')
const scoreSpan = document.querySelector('#score')
const message = document.querySelector('#message')
const alphabetDiv = document.querySelector('#alphabet')
let guessedCharacters = ""

const alphabet = "abcdefghijklmnopqrsšzžtuvwõäöüxy"
for (let char of alphabet) {
    let character = document.createElement('span');
    character.setAttribute("id", `${char}`);
    character.innerText = char

    character.addEventListener("click", e => {

        if (!guessedCharacters.includes(character.innerText) ) {

            guessedCharacters += character.innerText

            if (word.includes(character.innerText)) {
                message.innerText = `${character.innerText} in word`
                guessedWord[word.indexOf(character.innerText)] = character.innerText
                
            } else {
                message.innerText = `${character.innerText} not in word`
            }


        } else {
            message.innerText = `You already guessed ${character.innerText}!!!!`
        }
    })

    alphabetDiv.appendChild(character)
}

let score = 10;
scoreSpan.innerText = score

let word = 'Kuressaare Ametikool'
let guessedWord = '';

for (let char of word) {
    if ( char.toLowerCase() != char.toUpperCase()) {
        guessedWord += '_'
    } else {
        guessedWord += char;
    }
   
}

guessedWordDiv.innerText = guessedWord;

console.log(guessedWord)
