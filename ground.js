class ground{
    constructor(x, y, w,h) {
        var options = {
            isStatic:true
            
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h, options);
      //  this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
          var groundpos=this.body.position;
       // var angle = this.body.angle;
        push();
        translate(groundpos.x, groundpos.y);
       // rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,255,0);
        rect( 0, 0, this.w, this.h);
        pop();
      }
}