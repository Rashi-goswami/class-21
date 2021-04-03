var movingRect,fixedRect;
var rect1,rect2;
function setup() {
  createCanvas(800,400);

  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";

  fixedRect=createSprite(100,200,50,100);
  fixedRect.shapeColor="green";

  fixedRect1=createSprite(300,200,50,100);
  fixedRect1.shapeColor="green";





  rect1=createSprite(10,300,50,50);
  rect1.shapeColor="blue";
  rect2=createSprite(800,300,50,50);
  rect2.shapeColor="pink";
  rect1.velocityX=2;
  rect2.velocityX=-2;
}

function draw() {
  background(255,255,255);  
  fixedRect.shapeColor="green";
  fixedRect1.shapeColor="green";
  movingRect.shapeColor="green";

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


  if(isTouch(movingRect,fixedRect1))  { //argument
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }

  if(isTouch(movingRect,fixedRect))  { //argument
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
    bounce(rect1,rect2);
  drawSprites();
}

function bounce(object1,object2){

  if(object1.x-object2.x < object2.width/2 +object1.width/2 && 
    object2.x-object1.x < object2.width/2+object1.width/2 ){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y-object2.y < object2.height/2 +object1.height/2 && 
      object2.y-object1.y < object2.height/2+object1.height/2 ){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }
}

function isTouch(object1,object2){//paramater
  if(object1.x-object2.x < object2.width/2+object1.width/2 && 
    object2.x-object1.x < object2.width/2+object1.width/2 &&
    object1.y-object2.y < object2.height/2+object1.height/2 && 
    object2.y-object1.y < object2.height/2+object1.height/2){
     
      return true;
    }


    else{
     return false;//boolean data type
    }
}