class Slingshot{
    constructor(body1,point){ 
        var options={
            bodyA : body1,
            pointB : point,
            length : 10,
            stiffness : 0.04
        }
        //Constraint
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.sling3 = loadImage("sprites/sling3.png")
    }
    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position
            var  posB = this.sling.pointB
            if(posA.x<235){
                push();
                strokeWeight(6)
                stroke(48,22,8);
                imageMode(CENTER);
                line(posA.x + 20,posA.y,posB.x + 20,posB.y)
                line(posA.x - 15,posA.y,posB.x - 20,posB.y)
                image(this.sling3,posA.x-20,posA.y,15,30);
                pop();
            }
            if(posA.x>235){
                push();
                strokeWeight(6)
                stroke(48,22,8);
                imageMode(CENTER);
                line(posA.x + 20,posA.y,posB.x + 20,posB.y)
                line(posA.x + 20,posA.y,posB.x - 20,posB.y)
                image(this.sling3,posA.x+25,posA.y,15,30);
                pop();
  
            }
        }
    }
    fly(){
        this.sling.bodyA = null
    }
    attach(body){
        this.sling.bodyA = body;
    }
}