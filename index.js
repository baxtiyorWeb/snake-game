let foodX = 13,
  foodY = 10;
let playBoard = document.querySelector(".play-board");

let snakeX = 5,
  snakeY = 10;
let velocityX = 0,
  velocityY = 0;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 20) + 1;
  foodY = Math.floor(Math.random() * 20) + 1;
};

let gameOver = false

const changeDirection = (e) => {
  if (e.keyCode === 38) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.keyCode === 40) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.keyCode === 37) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.keyCode === 39) {
    velocityX = 1;
    velocityY = 0;
  }
  initGame();
};
let snakeBody = [];
const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  if (snakeY === foodX && snakeX === foodY) {
    changeFoodPosition();
    snakeBody.push([foodX, foodY]);
    console.log(snakeBody);
  }
  snakeBody[0] = [snakeX, snakeY];
  snakeX += velocityY;
  snakeY += velocityX;

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  // snake length
  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]}"></div>`;
  }

  if (snakeX <= 0 || snakeX > 20 || snakeY <= 0 || snakeY > 20) {
    gameOver = true
  }

  playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();
setInterval(initGame, 200);
document.addEventListener("keydown", changeDirection);
