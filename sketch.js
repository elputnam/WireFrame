var tileCount;
var locx;
var locy;


function setup() {
  createCanvas(windowWidth, windowHeight);
  tileCount = height*0.07
  colorMode(HSB, 360, 100, 100, 100);
  background(30, 100, 100);
  locx = width/2;
  locy = height/2;
  //frameRate(15)
}

function draw() {
  background(random(70), 100, 100, 1);
  push();
  scale(0.667);
  translate(width, height);
  let a = atan2(mouseY - height/2, mouseX - width/2);
  rotate(a);
  grid();
  fill(70, random(100), random(100));
  pop();
  dance();
  locx += random(-10, 10);
  locy -= random(-10, 10);
  
  if (locx < 0){
    locx += 5;
  }
  if (locx > width){
    locx -= 5;
  }
  if (locy < 0){
    locy += 5;
  }
  if (locy > height){
    locy -= 5;
  }
}

function dance(){
  noFill();
  for (i = 0; i < 20; i++){
    circle(locx, locy, random(50,150));
  }
}
function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      let nudge = (-3, 3);
      
      var toggle = int(random(0, 2));
      
      //spin
      fill(random(100, 200), random(100), random(100))
      //let a = atan2(mouseY - height / 2, mouseX - width / 2);
  //rotate(a*(random(0.5)));
      
      if (toggle == 0){
      //tiles
      quad(
          posX + random(nudge),
          posY + random(nudge),
          posX + width / tileCount + random(nudge),
          posY + random(nudge),
          posX + width / tileCount + random(nudge),
          posY + height / tileCount + random(nudge),
          posX + random(nudge),
          posY + height / tileCount + random(nudge)
        );
      }
    }
  }
}