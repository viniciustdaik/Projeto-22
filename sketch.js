const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerimage, baseimage, backgroundImg, playerArcherimg, boardimg, arrowimg;
var arrowG;
var player, playerBase, playerArcher, board;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimg = loadImage("./assets/playerArcher.png");
  arrowimg = loadImage("./assets/arrow.png");
  boardimg = loadImage("./assets/board.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var options = {
    isStatic: true
  };
  //playerArcher = Bodies.rectangle(200, 350, 180, 150, options);
  //World.add(world, playerArcher);
  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);
  //criar corpo do jogador
  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  //arrowG = new Group;
}

function draw() {
  background(backgroundImg);
  /*if(keyDown(LEFT_ARROW)){
    createArrow();
  }*/
  Engine.update(engine);

  //exibir a imagem do jogador usando a função image()
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);
  //exibir a imagem da base do jogador usando a função image()
  image(playerimage, player.position.x, player.position.y, 50, 180);
  //image(playerArcherimg, playerArcher.position.x, playerArcher.position.y, 180, 150);
  if(board.y > windowHeight-45){
    board.velocityY = -5;
  }
  if(board.y < 45){
    board.velocityY = +5;
  }

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}

/*function createArrow(){
  var arrow = createSprite(1000, 1000, 15, 15);
  arrow.position.x = playerArcher.position.x;
  arrow.position.y = playerArcher.position.y;
  arrow.addImage("arrow", arrowimg);
  arrowG.add(arrow);
}*/