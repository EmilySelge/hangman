let guessedWordDiv = document.querySelector('#word')
const scoreSpan = document.querySelector('#score')
const message = document.querySelector('#message')
const alphabetDiv = document.querySelector('#alphabet')
const newGameBtn = document.querySelector('#new-game-btn')
let guessedCharacters = ""

newGameBtn.style.display = "none"

const alphabet = "abcdefghijklmnopqrsšzžtuvwõäöüxy"
for (let char of alphabet) {
    let character = document.createElement('span');
    character.setAttribute("id", `${char}`);
    character.innerText = char

    character.addEventListener("click", e => {
        if (score < 1) return;

        if (!guessedCharacters.includes(character.innerText) ) {

            guessedCharacters += character.innerText

            if (word.toLowerCase().includes(character.innerText.toLowerCase())) {
                message.innerText = `${character.innerText} is in word`
                let guessedWordArray = guessedWord.split('')
                for (let i = 0; i < word.length; i++) {
                    if (character.innerText.toLowerCase() === word[i].toLowerCase()) {
                        guessedWordArray[i] = character.innerText
                        
                    }
                }
                guessedWord = guessedWordArray.join('')
                guessedWordDiv.innerText = guessedWord
                if (guessedWord.toLowerCase().replace(/^\s+|\s+$/gm,'') == word.toLowerCase().replace(/^\s+|\s+$/gm,'')) {
                    message.innerText = `Congratulations! You won.`
                    newGameBtn.style.display = "block"


                }
                
            } else {
                message.innerText = `${character.innerText} is not in word`
                score--
                scoreSpan.innerText = score
                if (score === 0) {
                    message.innerText = `Game OVER! The correct word was: ${word}`
                    newGameBtn.style.display = "block"
                }
            }


        } else {
            message.innerText = `You already guessed ${character.innerText}!!!!`
        }

    })

    alphabetDiv.appendChild(character)

   

    
}

document.addEventListener("keydown", e => {
    if (score < 1) return;

    let key;
    
    if (/[a-zA-ZäöüõšžÄÖÜÕŠŽ]/.test(e.key) && e.key.length === 1) {
        key = e.key.toLowerCase()
        if (!guessedCharacters.includes(key)) {
        
           

            if (word.toLowerCase().includes(key.toLowerCase())) {
                message.innerText = `${key} is in word`
                let guessedWordArray = guessedWord.split('')
                for (let i = 0; i < word.length; i++) {
                    if (key.toLowerCase() === word[i].toLowerCase()) {
                        guessedWordArray[i] = key
                        
                    }
                }
                guessedWord = guessedWordArray.join('')
                guessedWordDiv.innerText = guessedWord
                if (guessedWord.toLowerCase().replace(/^\s+|\s+$/gm,'') == word.toLowerCase().replace(/^\s+|\s+$/gm,'')) {
                    message.innerText = `Congratulations! You won.`

                    newGameBtn.style.display = "block"

                }
                guessedCharacters += key.toLowerCase();
                
            } else {
                message.innerText = `${key} is not in word`
                score--
                scoreSpan.innerText = score
                if (score === 0) {
                    message.innerText = `Game OVER! The correct word was: ${word}`

                    newGameBtn.style.display = "block"
                }
                guessedCharacters += key.toLowerCase();
            }

           

        } else if (guessedCharacters.includes(key)){
            message.innerText = `You already guessed ${key}!!!!`
        }
    }
    
});



let score = 10;
scoreSpan.innerText = score


let wordsArray;
let word;
let guessedWord = '';

fetch('hangman.txt')
  .then(response => response.text())
  .then(fileContents => {
    wordsArray = fileContents.trim().split(/\s+/);
    console.log(wordsArray);
    console.log(wordsArray[Math.floor(Math.random() * (wordsArray.length + 1))])
    word = String(wordsArray[Math.floor(Math.random() * (wordsArray.length + 1))])


    

    for (let char of word) {
        if ( char.toLowerCase() != char.toUpperCase()) {
            guessedWord += '_'
        } else {
            guessedWord += char;
        }
   
    }

    guessedWordDiv.innerText = guessedWord;



});






console.log(guessedWord)


newGameBtn.addEventListener("click", e => {
    score = 10;
    scoreSpan.innerText = score
    guessedCharacters = ""
    guessedWord = '';
    message.innerText = ''
    newGameBtn.style.display = "none"

    for (let char of word) {
        if ( char.toLowerCase() != char.toUpperCase()) {
            guessedWord += '_'
        } else {
            guessedWord += char;
        }
    
    }

    guessedWordDiv.innerText = guessedWord;

})