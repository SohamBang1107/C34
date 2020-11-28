class box{
    constructor(x,y,width,height){
      var options = {
               restitution:0.8,
               friction:1,
               density:0.04,
        
      }
    this.box = Bodies.rectangle(x,y,width,height,options);
    this.width =width;
    this.height = height;                         
    World.add(world , this.box)




    }
  display(){
     push();
     fill("blue");
     translate(this.box.position.x , this.box.position.y )
     rotate(this.box.angle)
    


     rect(0,0 , this.width, this.height)
     pop();
  }            



}