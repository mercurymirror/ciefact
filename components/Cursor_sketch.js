import p5 from "p5";

export default function cursor_sketch(p) {

    let parent_canvas = 'cursor'
    let vehicle;
    let vRadius = 30;
    let vMaxSpeed = 30;
    let vMaxForce = 10;
    let vSlowRadius = 50;

    p.setup = function() {
        let canvas = p.createCanvas(p.windowWidth*2, p.windowHeight*2 , p.P2D)
        canvas.parent(parent_canvas)
        p.noCursor();

        vehicle = new Vehicle(p.mouseX, p.mouseY, vMaxSpeed, vMaxForce, vRadius, vSlowRadius);

    };

    p.windowResized = function() {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight , p.P2D)
        canvas.parent(parent_canvas)
      }
      
    
    p.draw = function() {
        p.clear()
        let target = p.createVector(p.mouseX, p.mouseY);
        p.fill("#eb1615");
        p.ellipse(target.x, target.y, 8)

        let steering = vehicle.arrive(target);
        vehicle.applyForce(steering);
        vehicle.update();

        p.noFill();
        p.stroke("#eb1615");
        p.strokeWeight(1.5);
        p.ellipse(vehicle.pos.x, vehicle.pos.y, vRadius)

    };

    

class Vehicle {
  constructor(x, y, maxSpeed, maxForce, radius, slowRadius) {
    this.pos = p.createVector(x, y);
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
    this.r = radius;
    this.slowRadius = slowRadius
  }
  
  arrive(target) {
      let force = p5.Vector.sub(target, this.pos);
      let desiredSpeed = this.maxSpeed;
      let distance = force.mag();
      if (distance < this.slowRadius) {
          desiredSpeed = p.map(distance, 0, this.slowRadius, 0, this.maxSpeed);
      }
      
      force.setMag(desiredSpeed);
      force.sub(this.vel);
      force.limit(this.maxForce);
      return force;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

}
}

