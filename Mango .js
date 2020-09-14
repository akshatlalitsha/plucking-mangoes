class Mango{
constructor (x,y,r){
var options={
    isStatic:true,
    restitution:0,
    friction:1
}
this.image=loadImage('images/mango.png');
this.body=Bodies.circle(x,y,r,options);
this.r=r;
World.add(world,this.body);

}
display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER);
ellipseMode(RADIUS);
image(this.image,0,0,this.r,this.r);
pop();
}
}