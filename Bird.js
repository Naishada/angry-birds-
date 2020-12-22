class Bird extends Base{
    constructor(x,y){
        super(x,y,50,50)
        Matter.Body.setDensity(this.body,1.5);
        this.image = loadImage("sprites/bird.png")
        this.smokeImg = loadImage("sprites/smoke (1).png")
        this.path = []
    }
    //[[x1,y1],[x2,y2],[x3,y3],....[xn,yn]] : n = length -1
    //image(img,this.path[0][0],this.path[0][1])
    //image(img,this.path[1][0],this.path[1][1])
    //image(img,this.path[2][0],this.path[2][1])
    //image(img,this.path[3][0],this.path[3][1])
    //image(img,this.path[4][0],this.path[4][1])
    //image(img,this.path[i][0],this.path[i][1])
    
    
    display(){
       /*this.body.position.x = mouseX
        this.body.position.y = mouseY*/
        super.display();
        if(this.body.speed>10 &&this.body.position.x>230){
            var pos = [this.body.position.x,this.body.position.y];
            this.path.push(pos);
            for(var i = 0 ; i < this.path.length-1;i++){
                image(this.smokeImg,this.path[i][0],this.path[i][1])
            }
        }
    }
}
 