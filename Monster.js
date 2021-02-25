class Monster
{
	constructor(x,y)
	{
		var options={
			frictionAir:0.005,
			density:1
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y, 55,55, options);
		World.add(world, this.body);
        this.image=loadImage('images/Monster-01.png');
	}
	display()
	{	    
		var pos =this.body.position;
	    image(this.image,pos.x,pos.y,200,200);
			
	}

}