class Dustbin{
    constructor(x,y) {
        
        this.x = x;
        this.y = y;
        this.dustbinwidth = 200;
        this.dustbinheight = 213;
        this.wallthickness = 20;
       // this.angle = 0;
          this.image = loadImage("dustbingreen.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y,this.dustbinwidth,this.wallthickness,{isStatic:true});
        this.leftwallBody = Bodies.rectangle(this.x-this.dustbinwidth/2, this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
       // Matter.Body.setAngle(this.leftwallBody,this.angle);
        this.rightwallBody = Bodies.rectangle(this.x+this.dustbinwidth/2, this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
      //  Matter.Body.setAngle(this.rightwallBody,-1*this.angle)
        //  this.image = loadImage("sprites/base.png");
        World.add(world, this.bottomBody);
        World.add(world, this.leftwallBody);
        World.add(world, this.rightwallBody);
      }
      display(){
          var posBottom=this.bottomBody.position;
          var posLeft=this.leftwallBody.position;
          var posRight=this.rightwallBody.position;
       // var angle = this.body.angle;
        push();
        translate(posLeft.x, posLeft.y);
       // rotate(angle);
        rectMode(CENTER);
        //strokeWeight(3);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle)
        rect( 0, 0, this.wallthickness, this.dustbinheight);
        pop();

        push();
        translate(posRight.x, posRight.y);
       // rotate(angle);
        rectMode(CENTER);
        //strokeWeight(3);
        angleMode(RADIANS);
        fill(255);
        rotate(-1*this.angle)
        rect( 0, 0, this.wallthickness, this.dustbinheight);
        pop();

        push();
        translate(posBottom.x, posBottom.y+10);
       // rotate(angle);
        imageMode(CENTER);
        //strokeWeight(3);
        angleMode(RADIANS);
        fill(255);
        //rotate(this.angle)
        image( this.image, 0, -this.dustbinheight/2,this.dustbinwidth, this.dustbinheight);
        pop();
      }
}