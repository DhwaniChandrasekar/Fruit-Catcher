var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var balls
var form, player, game;
var backgroundImage;
var players,player1,player2;
function preload(){
   backgroundImage=loadImage("Background.jpg");
   p1i=loadImage("p1.png");
   p2image = loadImage("p2.png")
   fruit1_img = loadImage("images/apple2.png");
   fruit2_img = loadImage("images/banana2.png");
   fruit3_img = loadImage("images/melon2.png");
   fruit4_img = loadImage("images/orange2.png");
   fruit5_img = loadImage("images/pineapple2.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  ballsGroup = new Group();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
