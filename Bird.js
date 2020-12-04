class Bird extends Base{
    constructor(x,y){
        super(x,y,50,50)
        Matter.Body.setDensity(this.body,1.5);
        this.image = loadImage("sprites/bird.png")
    }
    display(){
       /* this.body.position.x = mouseX
        this.body.position.y = mouseY*/
        super.display();
    }
}
 