function playGame(playerInput) {
    // funkcja anonimowa, usuwa wszystkie wyświetlone do tej pory komunikaty, dzięki czemu mozna uruchamiać grę wielokrotnie
    clearMessages();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nozyce";
    } else {
      printMessage(" Nie znam ruchu o id " + argMoveId + ".");
      return "Nieznany ruch";
    }
  }

  // zmienna - wylosowana liczba przez komputer pomnozona przez 3 + 1 i zaokrąglona w dół, aby wyszło między 1 a 3
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  printMessage("Mój ruch to: " + computerMove);

  //ruch gracza jako okienko do wpisania liczby - do tego jest prompt
//   let playerInput = prompt(
//     "Wybierz swój ruch! 1: kamień, 2: papier, 3: nozyce."
//   );
  let playerMove = getMoveName(playerInput);
  printMessage("Twój ruch to: " + playerMove);

  function displayResult(computerMove, playerMove) {
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
      return "Ty wygrywasz!";
    }
    // player przegrywa
    return "Niestety przegrywasz!";
  }

  printMessage(displayResult(computerMove, playerMove));
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});