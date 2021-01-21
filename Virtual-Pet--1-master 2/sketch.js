var dog,dogimage1,dogimage2
var database
var foodS,foodStock
function preload()
{
dogimage1=loadImage("images/dogImg.png")
dogImage2=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  
  dog=createSprite(250,300,150,150)
  dog.addimage(dogimage1)
  dog.scale=0.2
 // foodStock=database.ref('Food')
  //foodStock.on("value",readStock)
  textSize(20)
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here

}



