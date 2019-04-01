
let a;
let part = [];
let maxParticles = 5;
let imagem;


function preload(){
      imagem= loadImage("img/planadorDois.png");
}

function setup() {
      createCanvas(window.innerWidth,window.innerHeight);
      a = new GLIDER();

      ;
      for(let i=0;i<maxParticles;i++){
            append(part,_particle());
      }

      frameRate(60)
}
function windVector(){
      var t = p5.Vector.fromAngle(a.vel.heading(), 40);
      t.mult(-1);
      return t
}
function posPnoise(f){
      f++;
      var n = createVector(random(30),random(30));
      //var n = createVector(0,0);
      var _pos = createVector(a.trans.x,a.trans.y)
      return _pos.add(n);
}
function _particle(){
      return p = new PARTICLE(posPnoise(frameCount),windVector())
}
function displayParticles(){
      for(let i=0;i<part.length;i++){
            part[i].display();
            part[i].update(frameCount+1);

            checkLifeParticle(i);
      }
}
function checkLifeParticle(index){
      if(part[index].life<=0){
            part[index] = _particle();
      }

}
function draw() {
      background(50,50,70);
      displayParticles();

      a.update();
      a.display();




      //noLoop()

}
