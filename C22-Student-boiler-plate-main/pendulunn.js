class String{
constructor(pointA,bodyB){
var options={
pointA:pointA,
bodyB:bodyB,
stifness:0.1,
length:100,
}
this.st=Constraint.create(options)
World.add(world,this.st)
}
display(){
    var pos=this.st.position
    var ptA=this.pointA
    var ptB=this.bodyB.position

    push();
    line(ptA.x,ptA.y,ptB.x,ptB.y)
    pop();
}
}