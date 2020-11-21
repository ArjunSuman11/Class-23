class Box{
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {
            restitution: 0.8,
            friction: 1,
            density:1
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);

        this.width = w;
        this.height = h;
    }

    //FUNCTIONS
    display(){
        //Add a new setting - push()
        push();
        fill(255);
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.width, this.height);
        //Remove the previous setting - pop()
        pop();
    }
}

/*
this : keyword which refers to the object that calls the property/function
rotate(angle)
translate(x, y)


box1.body
body
sprite.width=80
width
this.width
sprite.isTouching()

display();
box.display();
*/