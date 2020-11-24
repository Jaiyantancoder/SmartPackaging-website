var bundle,pouch;
var truck;
var bundleimg,pouchimg,truckimg;
var bg,bgimg;
var button,closebutton,infobutton,closebutton2;
var order,orderimg;
var info,infoimg;


function preload(){

//Loading the images    
bgimg = loadImage("welcome-post.png");
bundleimg = loadImage("bundle.png");
truckimg = loadImage("delivery-truck.png");
pouchimg = loadImage("pouches.png");
orderimg = loadImage("ODERS.png");
infoimg = loadImage("Info.png");

}

function setup(){
canvas = createCanvas(displayWidth,displayHeight);   

order  = createSprite(displayWidth/2-300,displayHeight/2+100,20,20);
order.addImage(orderimg);
order.scale = 0.6;
order.visible = false;

info  = createSprite(displayWidth/2+250,displayHeight/2+50,20,20);
info.addImage(infoimg);
info.scale = 0.6;
info.visible = false;

bundle = createSprite(displayWidth/2+670,displayHeight/2-75,20,20);
bundle.addImage(bundleimg);

truck  = createSprite(displayWidth/2-875,displayHeight/2+290,20,20);
truck.addImage(truckimg);
truck.scale = 0.3;


pouch = createSprite(displayWidth/2-725,displayHeight/2-175,20,20);
pouch.addImage(pouchimg);

bg = createSprite(displayWidth/2,displayHeight/2-350,20,20);
bg.addImage(bgimg);
bg.scale = 0.7;

button = createButton("OUR ORDERS");
closebutton = createButton("CLOSE");
infobutton  = createButton("INFO");
closebutton2 = createButton("CLOSE");
}

function draw(){
    
background("green");

truck.velocityX = 5;

button.position(displayWidth/2-600,displayHeight/2);
closebutton.position(displayWidth/2-600,displayHeight/2+50);
closebutton2.position(displayWidth/2+400,displayHeight/2+150);
infobutton.position(displayWidth/2+400,displayHeight/2-100);

button.mousePressed(()=>{

order.visible = true;

});

closebutton.mousePressed(()=>{

order.visible = false;
    
});

infobutton.mousePressed(()=>{

 info.visible = true;
        
});

closebutton2.mousePressed(()=>{

info.visible = false;
   
 });

if(truck.x>displayWidth){

truck.x = displayWidth/2-875

}
 
textSize(70);
fill(125,20,193);
text ("SMART PACKAGING",displayWidth/2-450,displayHeight/2-100);


drawSprites();

}   

