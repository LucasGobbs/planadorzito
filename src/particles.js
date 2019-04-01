class PARTICLE{
      constructor(pos,wind){

            this.pos = createVector(pos.x,pos.y);
            this.vel = createVector(0,0);
            this.acc = createVector(wind.x,wind.vy);
            this.acc.normalize();
            this.acc.mult(random(10));
            this.velLimit = random(5)+1;


            this.lifeMax = random(10)+15;
            this.life = this.lifeMax;
            this.r = 10;

      }
      display(){

            var alp = map(this.life,this.lifeMax,0,150,0);
            fill(150,150,200,alp);
            noStroke()
            push()
                  translate(this.pos);
                  rotate(radians(frameCount*0.1));
                  rect(0,0,this.r,this.r)
            pop()
      }


      update(f){
            this.acc.add(p5.Vector.lerp(this.acc,p5.Vector.random2D(),0.5))
            this.vel.add(this.acc);
            this.vel.limit(this.velLimit);



            this.pos.add(this.vel);


            this.life--;
            this.display();
      }
}
