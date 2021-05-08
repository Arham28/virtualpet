//Create variables here
var sadDog,happyDog;
var gamestate=0;
var foods,foodStock;
var database;
var dog1;
function preload()
{
  //load images here
  sadDog=loadImage("Dog.png")
  happyDog=loadImage("happydog.png")
}

function setup() {
 createCanvas(500,500);
 database=firebase.database()
 dog1=createSprite(250,250)
 dog1.addImage(sadDog)
 dog1.scale=0.35;
 foodStock=database.ref('food')
 foodStock.on("value",readStock)
}


function draw() {  
  //add styles here
background(46, 139, 87);
if(keyDown("UP")){
  writeStock(foods);
  dog1.addImage(happyDog)
}
drawSprites();
fill("white")
textSize(20)
text("press up arrow to feed the dog",100,50)
text("remaining food :"+foods,150,100)
}
function readStock(data){
foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0}
    else {
      x=x-1
    }
  database.ref('/').update({
    food:x
  })
 }



