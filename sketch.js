var canvas, backgroundImage;

var gamestate = 0;
var playercount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload()
  {
    track = loadImage("images/track.jpg")
    car1img = loadImage("images/car1.png")
    car2img = loadImage("images/car2.png")
    car3img = loadImage("images/car3.png")
    car4img = loadImage("images/car4.png")
    ground = loadImage("images/ground.png")
  }

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playercount === 4){
    game.update(1);
  }
  if(gamestate === 1){
    clear();
    game.play();
  }
  if(gamestate === 2)
  {
    game.end();
  }
}
