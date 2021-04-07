class Paper{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
       this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
          var paperpos=this.body.position;
       // var angle = this.body.angle;
        push();
        translate(paperpos.x, paperpos.y);
       // rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
       // strokeWeight(3);
        fill(255,0,255);
        image( this.image,0, 0, this.r, this.r);
        pop();
      }
}