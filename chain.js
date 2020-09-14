class Chain{
constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:1,
    stiffness:0.004
}

this.bodyA=bodyA;
this.pointB=pointB;
this.chain=Constraint.create(options)
World.add(world,this.chain);
}
fly(){
    this.chain.bodyA=null;
}
attach(body){
    this.chain.bodyA=body;
}
display(){
if(this.chain.bodyA){
var posA = this.bodyA.position;
var posB = this.pointB;

line(posA.x,posA.y,posB.x,posB.y);
}
}
}
