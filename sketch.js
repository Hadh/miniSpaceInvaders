
var ship;
var flowers = [];
var drops = [];
function setup() {
  createCanvas(600,400);
  ship = new Ship();
  for(var i =0; i<6 ;i++){
    flowers[i] = new Flower(i*80+80,60);
  }
}

function draw() {
  background(51); 
  ship.show();
  ship.move();
  for(var j =0; j<drops.length ;j++){
    drops[j].show();
    drops[j].move();
    for(var z =0; z<flowers.length; z++){
      if(drops[j].hits(flowers[z])){
        console.log(10);
        flowers[z].remove();
        drops[j].evaporate();
      }
    }
  }  
  var edge = false;
  for(var i =0; i<flowers.length;i++){
    flowers[i].show();
    flowers[i].move();
    if(flowers[i].x > width || flowers[i].x < 0){
      edge=true;
    }
  } 
  if (edge){
    for(var i =0; i<flowers.length;i++){
      flowers[i].shiftDown();
    } 
  }
}
function keyReleased() {
  if(key != ' '){
    ship.xdir = 0;
  }
}
function keyPressed() {
  if(keyCode === RIGHT_ARROW){
    ship.setDir(1);
  } else if(keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
  if(key === ' '){
    var drop = new Drop(ship.x,height-60);
    drops.push(drop);
  }
}