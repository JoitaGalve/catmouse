var garden, gardenImage;
var cat, catImage, catImage2, catImage3;
var mouse, mouseImage, mouseImage2, mouseImage3;

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")
    catImage = loadAnimation("images/cat1.png")
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png")
    catImage3 = loadAnimation("images/cat4.png")
    mouseImage = loadAnimation("images/mouse1.png")
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    garden = createSprite(400, 300, 1000, 800)
    garden.addImage(gardenImage)

    cat = createSprite(700, 490, 10, 10)
    cat.addAnimation("sitting", catImage)
    cat.scale = 0.1
    cat.velocityX = 0

    mouse = createSprite(150, 500, 10, 10)
    mouse.addAnimation("standing", mouseImage)
    mouse.scale = 0.1
    
}

function draw() {

    background("blue");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2) {
      cat.addAnimation("catLastImage", catImage3)
      cat.changeAnimation("catLastImage")
      cat.scale = 0.2
      mouse.addAnimation("mouseLastImage", mouseImage3)
      mouse.changeAnimation("mouseLastImage")
      mouse.scale = 0.1
       cat.velocityX = 0
   }

    
    drawSprites();
}


function keyPressed(){

    if(keyCode===LEFT_ARROW) {
        cat.velocityX = -3
        cat.addAnimation("catRunning", catImage2)
        cat.changeAnimation("catRunning", catImage2)
        cat.scale = 0.2
        
        if(keyCode===LEFT_ARROW) {
            mouse.velocityX = 0
            mouse.addAnimation("mouseTeasing", mouseImage2)
            mouse.changeAnimation("mouseTeasing")
            mouse.scale = 0.1
            
        }
    }
    
    

  
  
}
