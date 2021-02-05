var canvas;
var music;
var b1;
var s1,s2,s3,s4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
s1=createSprite(520,590,150,20);
s2=createSprite(365,590,150,20);
s3=createSprite(210,590,150,20);
s4=createSprite(55,590,150,20);

s1.shapeColor="red";
s2.shapeColor="green";
s3.shapeColor="blue";
s4.shapeColor="orange";

    //create box sprite and give velocity
    b1=createSprite(random(20,750));
    b1.shapeColor="white";
    b1.velocityX=20;
    b1.velocityY=20;
    b1.scale=0.3;
    

}

function draw() {
    background(0);
    //create edgeSprite
    edges=createEdgeSprites();
    b1.bounceOff(edges);
 
    //add condition to check if box touching surface and make it box

    if(s1.isTouching(b1)&&b1.bounceOff(s1)){
    b1.shapeColor="red";
    music.play();
    
    }
 
    if(s2.isTouching(b1)&&b1.bounceOff(s2)){
    b1.shapeColor="green";
        }

    if(s3.isTouching(b1)&&b1.bounceOff(s3)){
    b1.shapeColor="blue";
        }

    if(s4.isTouching(b1)&&b1.bounceOff(s4)){
    b1.shapeColor="orange";
    
        }
 


    drawSprites();
}