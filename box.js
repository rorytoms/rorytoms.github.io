class Box {
    constructor(x,y,w,h){
        this.dragging = false;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    update() {
        // Adjust location if being dragged
        if (this.dragging) {
            if (this.y > -1 && this.y + this.h <= height){
          this.y = mouseY + this.offsetY;
            }

            if (this.y < 0)
            {
                this.y = 0;
            }
            if (this.y > height - this.h)
            {
                this.y = height - this.h;
            }
        }
      }

    show()
    {
        stroke(0);
        // Different fill based on state
        if (this.dragging) {
          fill(50);
        } else if (this.rollover) {
          fill(100);
        } else {
          fill(175);
        }
        rect(this.x, this.y, this.w, this.h);

        fill(255);
        textSize(100);
        textAlign(CENTER,CENTER);
        text("WAYFINDER",this.w/2, this.y+this.h/2);
    }


    pressed() {
        // Did I click on the rectangle?
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
        }
    }

    released() {
        // Quit dragging
        this.dragging = false;
    }

}