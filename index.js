const canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 576;
const c = canvas.getContext("2d");

const map = new Image();
map.src = "./images/RPG Game.png";

map.onload = () => {
  c.drawImage(map, -300, -650);
};
