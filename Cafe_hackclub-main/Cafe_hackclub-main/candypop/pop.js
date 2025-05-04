const screens = document.querySelectorAll(".screen");
const chooseSweetButtons = document.querySelectorAll(".choose-sweet-btn");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
const backButton = document.getElementById("back-btn");

let seconds = 0;
let score = 0;
let selectedSweet = {};
let gameInterval;

startButton.addEventListener("click", () => screens[0].classList.add("up"));

const increaseScore = () => {
  score++;
  if (score > 19) message.classList.add("visible");
  scoreElement.innerHTML = `Score: ${score}`;
};

const addSweets = () => {
  setTimeout(createSweet, 1000);
  setTimeout(createSweet, 1500);
};

const catchSweet = function () {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addSweets();
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return { x: Math.random() * (width - 200) + 100, y: Math.random() * (height - 200) + 100 };
};

const createSweet = () => {
  const sweet = document.createElement("div");
  sweet.classList.add("sweet");
  const { x, y } = getRandomLocation();
  sweet.style.top = `${y}px`;
  sweet.style.left = `${x}px`;
  sweet.innerHTML = `<img src="${selectedSweet.src}" alt="${selectedSweet.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;
  sweet.addEventListener("click", catchSweet);
  gameContainer.appendChild(sweet);
};

const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  timeElement.innerHTML = `Time: ${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
  seconds++;
};

chooseSweetButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedSweet = { src: button.querySelector("img").src, alt: button.querySelector("img").alt };
    screens[1].classList.add("up");
    gameInterval = setInterval(increaseTime, 1000);
    setTimeout(createSweet, 1000);
  });
});

backButton.addEventListener("click", () => location.reload());
