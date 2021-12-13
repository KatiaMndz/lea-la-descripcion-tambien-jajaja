var fondo;
var fondoSticker;

var shark;
var sharkSticker;


function preload(){

    sharkSticker = loadImage ("tirrubon.png");


}

function setup() {
createCanvas(400,400);

    fondo = createSprite (200,200,400,400);
    shark = createSprite (200,360,20,20);

    //esta imagén es provisional jeje
    shark.addImage(sharkSticker);
    shark.scale=0.05;
    
}

function draw() {
    
    drawSprites();

    if(keyDown("space")){
        shark.velocityY = -5;
      }

    if(keyDown("down_arrow")){
        shark.velocityY = 5;
    }

    if (keyDown("left_arrow")){
        shark.velocityX= -5;
    }

    if (keyDown("right_arrow")){
        shark.velocityX= 5;
    }

}