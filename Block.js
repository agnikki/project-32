  
class Block {
    constructor(x, y, width, height,color) {
        
      
      var options = {
            'restitution':0.2,
            'friction':0.6,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage('wood1.png')
        this.width = width;
        this.height = height;
        this.color = color;
        this.Visiblity = 255;
        World.add(world, this.body);

        
      }

        display(){
        //console.log(this.body.speed);
        if(this.body.speed < 4){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          fill(this.color);
          imageMode(CENTER);
          image(this.image,0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
        push();
        //translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill(this.color)  
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image( this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
        }
      
      }
    
    
    
        
     score(){
      if(this.Visiblity < 0 && this.Visiblity >- 1005){
        score++;
      }
    }
  }