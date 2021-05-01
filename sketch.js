
var bg,bgImage
var cat,catImg,catWalk,catMeet
var mouse,mouseImg,mouseTease


function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png")
    catImg = loadAnimation("images/cat1.png")
    mouseImg= loadImage("images/mouse4.png")

    catWalk=loadAnimation("images/cat2.png","images/cat3.png")
    catMeet=loadAnimation("images/cat4.png")

    mouseTease=loadAnimation("images/mouse3.png","images/mouse2.png")
    mouseGift=loadAnimation("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    bg=createSprite(500,400)
    bg.addImage(bgImage)
    bg.scale=1
    
    cat=createSprite(800,650)
    cat.addAnimation("sit",catImg)
    cat.addAnimation("walk",catWalk)
    cat.addAnimation("meet",catMeet)
    cat.scale=0.10

    mouse=createSprite(200,600)
    mouse.addAnimation("search",mouseImg)
    mouse.addAnimation("tease",mouseTease)
    mouse.addAnimation("gift",mouseGift)
    mouse.scale=0.14;

    mouse.setCollider("rectangle",0,0,mouse.height,mouse.width);
    mouse.debug=true;
    cat.setCollider("rectangle",0,0,cat.width,cat.height);
    cat.debug=true;
}

function draw() {

    background(255);

    keyPressed()

//Write condition here to evalute if tom and jerry collide
if(cat.collide(mouse)){
    cat.velocityX=0;
    cat.changeAnimation("meet",catMeet);
    mouse.changeAnimation("gift",mouseGift);
   
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyDown("space")){
      cat.changeAnimation("walk",catWalk)
      cat.velocityX = -2;

      mouse.changeAnimation("tease",mouseTease)
      
   } 
   else if (keyDown("up_arrow")){
      cat.velocityX=0;
   }


}
