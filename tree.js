class Tree{
constructor(x,y){
    var options={
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.width=450;
    this.height=600;

this.treeimage=loadImage('images/tree.png');

this.leftbody=Bodies.rectangle(0,this.y-this.height/2,10,this.height,{isStatic:false});
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
this.rightbody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,10,this.height,{isStatic:false});

World.add(world,this.body);
World.add(world,this.rightbody);
World.add(world,this.leftbody);
}

display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y+10);
fill("green");
imageMode(CENTER);
image(this.treeimage,0,-this.height/2,this.width,this.height)
pop();
}
}