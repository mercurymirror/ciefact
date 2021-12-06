

export default function cursor_sketch(p) {

    let parent_canvas = 'cursor'

    let vehicle;
    let vRadius = 30;
    let vMaxSpeed = 20;
    let vMaxForce = 1.5;
    let vSlowRadius = 80;

    p.setup = function() {
        console.log('CURSOR!!')
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight , p.P2D)
        console.log(canvas);
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
        p.fill(0);
        p.ellipse(target.x, target.y, 10)

        let steering = vehicle.arrive(target);
        vehicle.applyForce(steering);
        vehicle.update();

        p.noFill();
        p.strokeWeight(2);
        p.ellipse(vehicle.pos.x, vehicle.pos.y, vRadius)

    };
}


class Vehicle {
    constructor(x, y, maxSpeed, maxForce, radius, slowRadius) {
      this.pos = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
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
            desiredSpeed = map(distance, 0, this.slowRadius, 0, this.maxSpeed);
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
