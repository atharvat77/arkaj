var wormGroup;
var score=0;
function preload() {

  bgImage=loadImage("images/swampImg.png");
  playerImage=loadImage("images/frog.png");
  wormImage=loadImage("images/worm.png");

}


function setup() {
  createCanvas(600,600);
  bg=createSprite(300,300,600,600);
  bg.scale=2.5;
  bg.addImage(bgImage);

  player=createSprite(40,550,30,30);
  player.scale=0.4;
  player.addImage(playerImage);

  wormGroup=new Group();
}

function draw() {

  background("black");
  stroke("red");
  noFill();
  ellipse(100,350,40,30);

  for(var i=0;i<(wormGroup).length;i++)
  {
    temp=wormGroup.get(i);
    if(player.isTouching(temp))
    {
      score++;
      temp.destroy();
      temp=null;
    }
  }

  

  //mouse controls 

  player.x=mouseX;
  player.y=mouseY;

  if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
    text("NO CHEATING!!",200,200);
    player.x=30;
    player.y=30;
  }

  generateWorms();
  drawSprites();

  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms()
{
  if(frameCount%30==0)
  {
    worm=createSprite(random(100,400),random(100,400),40,5);
    worm.scale=random(0.1,0.4);
    worm.addImage(wormImage);
    worm.velocityX=random(-4,4);
    worm.velocityY=random(-4,4);
    wormGroup.add(worm);
  }
  
}

