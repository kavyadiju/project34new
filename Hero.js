class Hero
{
	constructor(x,y)
	{
		var options={
			frictionAir:0.005,
			density:1
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y, 550,300, options);
		World.add(world, this.body);
        this.image=loadImage('images/Superhero-01.png');
	}
	display()
	{	    
		var pos =this.body.position;
	    image(this.image,pos.x,pos.y,400,150);
			
	}

}