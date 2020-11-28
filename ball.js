class ball{
    constructor(x,y,width,height){
      var options = {
               
               density:1,
        
      }
    this.ball = Bodies.rectangle(x,y,width,height,options);
    this.width =width;
    this.height = height;                         
    World.add(world , this.ball)




    }
  display(){
     push();
     fill("black");
     translate(this.ball.position.x , this.ball.position.y )
     rotate(this.ball.angle)
     


     ellipse(0,0 , this.width, this.height)
     pop();
  }            



}
