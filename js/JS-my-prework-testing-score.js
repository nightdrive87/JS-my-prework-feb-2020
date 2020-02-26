// NAUKA

// printMessage('Zagrałem' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');
// let computerMove = 'kamień';
// printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
// let playerMove = 'papier';
// printMessage('Zagrałem' + computerMove + '! Jeśli Twoj ruch to' + playerMove + ', to wygrywasz!');
// let randomFraction = Math.random();
// printMessage('Wylosowany ułamek to:' + randomFraction);
// let calculation = randomFraction *3 + 1;
// printMessage('Ułamek pomnozony przez 3 i powiększony o 1 to:' + calculation);
// let roundNumber = Math.floor(calculation);
// printMessage('Liczba po zaokrągleniu w dół to:' + roundNumber);

// zmienna - wylosowana liczba przez komputer pomnozona przez 3 + 1 i zaokrąglona w dół, aby wyszło między 1 a 3
let playerScore = 0;
let computerScore = 0;

function runGame() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let randomNumber2 = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to:" + randomNumber);

  let computerMove = randomNumber;

  // przypisujemy liczbom ruch w grze
  if (randomNumber == 1) {
    computerMove = "kamień";
  } else if (randomNumber == 2) {
    computerMove = "papier";
  } else if (randomNumber == 3) {
    computerMove = "nozyce";
  }

  printMessage("Mój ruch to:" + computerMove);

  //ruch gracza jako okienko do wpisania liczby - do tego jest prompt
  let playerInput = randomNumber2;

  console.log("Gracz wpisał:" + playerInput);

  //przypisanie liczbom ruchów gry
  if (playerInput == 1) {
    playerMove = "kamień";
  } else if (playerInput == 2) {
    playerMove = "papier";
  } else if (playerInput == 3) {
    playerMove = "nozyce";
  } else {
    playerMove = "nieznany ruch";
  }

  printMessage("Twój ruch to:" + playerMove);

  //wyniki gry - rózne kombinacje
  // if(computerMove == playerMove){
  //     printMessage('Mamy remis!');
  // } else if(computerMove == 'kamień' && playerMove == 'papier'){
  //     printMessage('Ty wygrywasz!');
  // } else if(computerMove == 'kamień' && playerMove == 'nozyce'){
  //     printMessage('Niestety przegrywasz!');
  // } else if(computerMove == 'papier' && playerMove == 'nozyce'){
  //     printMessage('Ty wygrywasz!');
  // } else if(computerMove == 'papier' && playerMove == 'kamień'){
  //     printMessage('Niestety przegrywasz!');
  // } else if(computerMove == 'nozyce' && playerMove == 'kamień'){
  //     printMessage('Ty wygrywasz!');
  // } else if(computerMove == 'nozyce' && playerMove == 'papier'){
  //     printMessage('Niestety przegrywasz!');
  // } else if(playerMove == 'nieznany ruch'){
  //     printMessage('Twój ruch jest nieznany. Zagraj jeszcze raz!');
  // }

  function getResult(computerMove, playerMove) {
    //nieznany ruch
    if (playerMove == "nieznany ruch" || !playerMove) {
      return "Twój ruch jest nieznany. Zagraj jeszcze raz!";
    }
    // remis
    if (computerMove == playerMove) {
      return "Mamy remis!";
    }
    // player wygrywa
    if (
      (computerMove == "kamień" && playerMove == "papier") ||
      (computerMove == "papier" && playerMove == "nozyce") ||
      (computerMove == "nozyce" && playerMove == "kamień")
    ) {
      // playerScore = playerScore + 1
      playerScore++;
      return "Ty wygrywasz!";
    }
    // player przegrywa
    computerScore++;
    return "Niestety przegrywasz!";
  }

  printMessage(getResult(computerMove, playerMove));
}

for (let x = 0; x < 1000; x++) {
  runGame();
}
printMessage("Player: " + playerScore);
printMessage("Computer: " + computerScore);
