class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1, 200,20);
        image(this.sling2, 170,20);


        if(this.sling.bodyA){ //if bird exists on slingshot (haven't flown yet)
            var pA = this.sling.bodyA.position;
            var pB = this.pointB;
            strokeWeight(4);
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
            push();
            strokeWeight(4);
            stroke(48,22,8);
            if(pA.x<220){
            line(pA.x-25,pA.y,pB.x,pB.y);
            line(pA.x-20,pA.y,pB.x+30,pB.y-3);
            image(this.sling3, pA.x-30,pA.y-10, 15,30);
            }
            else{
                line(pA.x-25,pA.y,pB.x,pB.y);
                line(pA.x-20,pA.y,pB.x+30,pB.y-3);
                image(this.sling3, pA.x+25,pA.y-10, 15,30);
            }
            pop();
            
        }
    }
    
}