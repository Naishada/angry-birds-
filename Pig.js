class Pig extends Base {
    constructor(x,y){
        super(x,y,40,40);
        this.visibility = 255;
        this.image = loadImage("sprites/enemy.png");
    }
    display(){
        push();
        if (this.body.speed<6){
            super.display();
            //console.log(this.body.speed);
        }
        else{
            World.remove(world,this.body);
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,40,40);
            this.visibility = this.visibility - 5;   
        }
        pop();
    }
    score(){
        if(this.visibility<255 && this.visibility>0){
            score++
        }
    }
}