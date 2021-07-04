const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine
var world

function Setup(){
createCanvas(400,200)
engine=Engine.create()
world=engine.world
ball=new Ball(200,50,10)
string=new String({x:200,y:20},ball.body)
}

function Draw(){
background("black")
Engine.update(engine)
ball.display()
string.display()
}