/*ctor function */
function Flower(x,y){
	this.x = x;
	this.y=y;
	this.r = 30;
	this.xdir = 1 ;
	this.ydir = 400 ;


	this.show = function () {
		fill(255,0,200);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}
	this.remove = function (){
		this.r = 0;
	}
	this.move=function () {
		this.x= this.x + this.xdir;
	}
	this.shiftDown = function () {
		this.xdir *= -1 ;
		this.y += this.r;
	}

}