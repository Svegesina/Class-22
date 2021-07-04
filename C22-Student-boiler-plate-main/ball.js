class Ball{
constructor(x,y,r){
var options={
restitution:0.8
}
this.x=x
this.y=y
this.r=r

this.ball=Bodies.circle(x,y,r,options)
World.add(world,this.ball)
}
display(){
var pos=this.ball.position

push();
ellipseMode(CENTER);
stroke(255);
fill(127);
ellipse(this.x, this.y, this.r, this.r);
pop();

}
}