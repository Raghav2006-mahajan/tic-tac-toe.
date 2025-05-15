
let x = document.getElementsByClassName("cell");
let user1move = [];
let user2move = [];
let currentplayer = 1;
let totalmove = 0;
let gameOver = false;

// turn indicators
let a = document.getElementById("box1");
let b = document.getElementById("box2");
a.innerHTML = "Player 1 Turn";
b.innerHTML = "";

const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

function checkWinner(moves) {
  return winningCombos.some(combo =>
    combo.every(cell => moves.includes(cell))
  );
}

for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function () {
    if (gameOver || x[i].innerHTML !== "") return;

    if (currentplayer === 1) {
      x[i].innerHTML = "❌";
      user1move.push(i);
      totalmove++;

      if (checkWinner(user1move)) {
        alert("User 1 Wins!");
        gameOver = true;
        return;
      }

      currentplayer = 2;
      a.innerHTML = "";
      b.innerHTML = "Player 2 Turn";

    } else {
      x[i].innerHTML = "O";
      user2move.push(i);
      totalmove++;

      if (checkWinner(user2move)) {
        alert("User 2 Wins!");
        gameOver = true;
        return;
      }

      currentplayer = 1;
      b.innerHTML = "";
      a.innerHTML = "Player 1 Turn";
    }

    if (totalmove === 9 && !gameOver) {
      alert("It's a draw!");
      gameOver = true;
    }
  });
}

let y = document.getElementById("resetgame");
y.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
  }
  user1move = [];
  user2move = [];
  currentplayer = 1;
  totalmove = 0;
  gameOver = false;
  a.innerHTML = "Player 1 Turn";
  b.innerHTML = "";
});

