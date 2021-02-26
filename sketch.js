var canvas;
var music;
var c1,c2,c3,c4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    c1=createSprite(90,580,180,10);
    c1.shapeColor="green";
    c2=createSprite(290,580,200,10);
    c2.shapeColor="yellow";
    c3=createSprite(490,580,180,10);
    c3.shapeColor="purple";
    c4=createSprite(690,580,180,10);
    c4.shapeColor="red";
    box=createSprite(random(20,750),200,30,30);
    box.shapeColor="white";
    box.velocityX=-0.5;
    box.velocityY=8;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();



    //add condition to check if box touching surface and make it box
    if(c1.isTouching(box)&& box.bounceOff(c1)){
        box.shapeColor="blue";
        music.play();
    }
    if(c2.isTouching(box)&&box.bounceOff(c2)){
        box.shapeColor="green";
    }
    if(c4.isTouching(box)&&box.bounceOff(c4)){
        box.shapeColor="yellow";
    }
    if(c3.isTouching(box)){
        box.shapeColor="white";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }
    drawSprites();
}
