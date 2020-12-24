class Bob {
    constructor(x, y,radius) {
      var options = {
          
          restitution:1,
          friction:2,
          density:4,
          isStatic:false
      }
      this.body = Bodies.circle(x,y,radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);  
      fill("Blue");
      ellipse(0,0, this.radius,35);
      pop();
    }
  }