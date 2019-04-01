class GLIDER{
      constructor(){
            this.pos = createVector(0,0);
            this.acc = createVector(0,0);
            this.vel = createVector(0,0);
            this.l = 12;

            this.trans = createVector(0,0);
            this.front =0;
      }
      update(){
            this.acc = createVector(mouseX,mouseY);
            this.acc.sub(this.pos);

            var dist = this.acc.mag();
            this.acc.mult(1/dist);

            var accMax = 20;
            if (dist <= 2500) {
                  var m = map(dist,0,2500,0,accMax*0.5);
                  this.acc.mult(m);
            } else {
                  this.acc.mult(accMax);
            }

            this.vel.add(this.acc);
            this.vel.limit(this.l);

            this.pos.add(this.vel);

            //this.pos = createVector(mouseX,mouseY)
      }
      display(){

            var img = imagem;
            var wd = img.width * 0.5;
            var ht = img.height * 0.5;


            this.front = this.vel.heading()+PI/2;
            this.trans = createVector(this.pos.x-wd*0.5, this.pos.y-ht*0.5);


            push()
                  translate(this.trans.x,this.trans.y);
                  rotate(this.front);
                  //fill(255);
                  //rectMode(CENTER);
                  //rect(0,0,50,50);
                  image(img,-wd*0.5,0,wd,ht)
            pop()

      }
}
