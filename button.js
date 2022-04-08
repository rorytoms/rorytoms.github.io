class Button {
    constructor(x,y,w,h,c){
        this.dragging = false;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetX = 0;
        this.offsetY = 0;
        this.c = c;
    }

    show()
    {
        stroke(0);
        // Different fill based on state
        fill(10, 200,230);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.w, this.h);

        fill(255);
        textSize(50);
        textAlign(CENTER,CENTER);
        text("MOVE",this.x, this.y);
    }


    pressed() {
        // Did I click on the button?
        var d = dist(mouseX,mouseY,this.x,this.y)
        if (d < this.w/2) {
        return true;
        }
    }



}