
  // DOEL: displayWordSoFar
  // word = "javascript" guesses = [];
  // -> "_ _ _ _ _ _ _ _ _ _ "
  // word = "javascript" guesses = ["q", "w", "e", "a", "t"];
  // -> "_ a _ a _ _ _ _ _ t "
  // STRATEGIE:
  // Een string aan elkaar plakken
  // Door over elke letter in het woord heen te loopen
  // Zit die letter er niet in: plak "_ " aan de string
  // Zit die letter er wel in: plak "<letter> " aan de string
  // - [x] zet het eerste testje op test.only (later weer weghalen)
  // - [x] loggen: wat is word, wat is guesses
  // - [x] javascript "splitten" word.split("") -> ['j','a','v','a','s','c','r','i','p','t']
  // - [x] Maak een output variable (met let) met de waarde lege string
  // - [ ] een loop maken -> we loopen over ['j','a','v','a','s','c','r','i','p','t']
  // - [ ] voo elke van letters checken: zit de letter in guesses (guess.includes(letter))?
  // - [ ] if else
  // - [ ] zo nee: plak "_ " aan de output variable
  // - [ ] zo ja: plak "j " aan de output variable (niet j, maar de letter die we dan checken)
  // - [ ] klaar? -> onze ouutput string die we hebben gemaakt returnen
  // - [ ] Test geslaagd? haal test.only weg en zet het bij de volgende test erbij

  function displayWordSoFar(word, guesses) {
  console.log("Guesses:", guesses)
  const lettersInWordArray = word.split("");

  let output = "";
  for (let i = 0; i < lettersInWordArray.length; i++) {
      const letterInWord = lettersInWordArray[i];
      //console.log(letterInWord)
      const isLetterGuessed = guesses.includes(letterInWord);
      //console.log(isLetterGuessed);

      if (!isLetterGuessed) {
        output = output + "_ ";
        //console.log(output)
      }
      if (isLetterGuessed) {
        output = output + letterInWord + " ";
        //console.log(output)
      }
    }
  return output;
}

function isGameWon(word, guesses) {
// input is javascript, guesses [] lege array
  // ja, dan gewonnen
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
