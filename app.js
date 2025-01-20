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
                    message.innerText = "Game OVER! YOU SUCK!!!"
                    newGameBtn.style.display = "block"
                }
            }


        } else {
            message.innerText = `You already guessed ${character.innerText}!!!!`
        }

    })

    document.addEventListener("keypress", e => {
        let key;
        if (/[a-zA-ZäöüõšžÄÖÜÕŠŽ]/.test(e.key) && e.key.length === 1) {
            key = e.key
            if (!guessedCharacters.includes(key)) {
            
                guessedCharacters += key
    
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
                    
                } else {
                    message.innerText = `${key} is not in word`
                    score--
                    scoreSpan.innerText = score
                    if (score === 0) {
                        message.innerText = "Game OVER! YOU SUCK!!!"
                        newGameBtn.style.display = "block"
                    }
                }
    
    
            }
        } else {
            message.innerText = `You already guessed ${key}!!!!`
        }
        
    });

    alphabetDiv.appendChild(character)
}



let score = 10;
scoreSpan.innerText = score

const wordsArray = [
    "Aed", "Auto", "Puu", "Raamat", "Vesi", "Taev", "Maja", "Inimene", "Söök", "Jook",
    "Lill", "Maal", "Tund", "Päev", "Õhtu", "Hommik", "Öö", "Keel", "Puu", "Tund",
    "Lind", "Mere", "Kõik", "Jõgi", "Tee", "Linn", "Mets", "Vana", "Noorte", "Õpilane",
    "Kool", "Arvuti", "Ülikool", "Töötama", "Kõndima", "Sõitma", "Ujuma", "Õppima", "Kuulma", "Nägema",
    "Rõõm", "Kurbus", "Hirm", "Armastus", "Tervis", "Külm", "Soé", "Ilm", "Täht", "Pilv",
    "Tuul", "Uus", "Vana", "Vaba", "Töö", "Palk", "Raha", "Tänav", "Keskkond", "Aega",
    "Seiklus", "Üks", "Kaks", "Kolm", "Neli", "Viis", "Kuus", "Seitsme", "Kaheksa", "Üheksa",
    "Kümme", "Sada", "Tuhat", "Täna", "Homme", "Eile", "Koer", "Kass", "Hobune", "Lehm",
    "Lambad", "Siil", "Muld", "Kivim", "Rada", "Kuningas", "Empress", "Põld", "Väli", "Aken",
    "Uks", "Läbi", "Üle", "Alla", "Kodu", "Rahu", "Õnn", "Tänan", "Palun", "Jaa"
];

let word = wordsArray[Math.floor(Math.random() * 101)]
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


newGameBtn.addEventListener("click", e => {
    score = 10;
    scoreSpan.innerText = score

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