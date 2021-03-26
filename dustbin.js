class Dustbin{

    constructor(x, y){

        this.x = x;
        this.y = y;
        this.BBwidth = 200;
        this.SBheight = 100;
        this.Bthick = 20;
        this.angle = 0;

        this.BB = Bodies.rectangle(this.x, this.y, this.BBwidth, this.Bthick, {isStatic:true})
        this.LW = Bodies.rectangle(this.x - this.BBwidth/2, this.y - this.SBheight/2, this.Bthick, this.SBheight, {isStatic:true});
        this.RW = Bodies.rectangle(this.x + this.BBwidth/2, this.y - this.SBheight/2, this.Bthick, this.SBheight, {isStatic:true})

        World.add(world, this.BB);
        World.add(world, this.LW);
        World.add(world, this.RW);

    }

    display() {

        var posBottom = this.BB.position;
        var posRight = this.RW.position;
        var posLeft = this.LW.position;

        fill("green");
        
        rect(posLeft.x+20, posLeft.y, this.Bthick, this.SBheight);
        rect(posRight.x-20, posRight.y, this.Bthick, this.SBheight);
        rect(posBottom.x ,posBottom.y, this.BBwidth-40, this.Bthick);

    }

}