const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let isPlaying = false;

const characterImg = new Image();
characterImg.src = "./imágenes/snorlax.gif";

const backgroundImg = new Image();
backgroundImg.src = "./imágenes/fondojuego1.jpg";

const character = {
  x: 50,
  y: 300,
  width: 50,
  height: 50,
  dx: 0,
  dy: 0,
  speed: 5,
};

const keys = {
  right: false,
  left: false,
  up: false,
  down: false,
};

document.getElementById("start-btn").addEventListener("click", startGame);

function startGame() {
  document.getElementById("start-btn").style.display = "none";
  isPlaying = true;
  gameLoop();
}

function gameLoop() {
  if (!isPlaying) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    characterImg,
    character.x,
    character.y,
    character.width,
    character.height
  );
  moveCharacter();

  requestAnimationFrame(gameLoop);
}

function moveCharacter() {
  if (keys.right) character.dx = character.speed;
  else if (keys.left) character.dx = -character.speed;
  else character.dx = 0;

  if (keys.up) character.dy = -character.speed;
  else if (keys.down) character.dy = character.speed;
  else character.dy = 0;

  character.x += character.dx;
  character.y += character.dy;

  if (character.x < 0) character.x = 0;
  if (character.x + character.width > canvas.width)
    character.x = canvas.width - character.width;
  if (character.y < 0) character.y = 0;
  if (character.y + character.height > canvas.height)
    character.y = canvas.height - character.height;
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") keys.right = true;
  if (e.key === "ArrowLeft") keys.left = true;
  if (e.key === "ArrowUp") keys.up = true;
  if (e.key === "ArrowDown") keys.down = true;
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") keys.right = false;
  if (e.key === "ArrowLeft") keys.left = false;
  if (e.key === "ArrowUp") keys.up = false;
  if (e.key === "ArrowDown") keys.down = false;
});
