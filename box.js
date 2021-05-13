class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);

     if(isTouching(this.body, ball.body)){
        World.remove(world, this.body);
        this.body = null;
        console.log("is touching ")
        console.log(this.body)
        rect(0, 0,  this.width, this.height);
        console.log(this.body)

      }
       pop();
    }
  }
}
    //console.log(isTouching(this.body, ball.body))
   
    //var collision = Matter.SAT.collides(this.body, ball.body);
    //}
    //console.log(collision.collided);
    /*if(collision.collided === true){
      World.remove(world, this.body);
    }
   */
    /*if(collision.collided){
      World.remove(world,
} this.body);
      console.log(this.body)
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
        
    }*/

    //console.log(ball.body.position);
    //console.log(ball.body.width);

      //console.log(this.body.position)
    
