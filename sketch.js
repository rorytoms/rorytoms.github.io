let box1;
let button1;
let button2;

function setup() 
{
    createCanvas(windowWidth,windowHeight);
    box1 = new Box(0,height/3,width,height/2);
    button1 = new Button(width/2,height/4,200,200,0);
    button2 = new Button(width/2,height/4*3,200,200,height/2);
}

function draw() 
{

    background(0);
    fill(255,0,255);
    noStroke();

    


    button1.show();
    button2.show();


    box1.update();
    box1.show();
 
}

function mousePressed() {
    box1.pressed();
    if(button1.pressed())
    {
        box1.y = button1.c;
    };
    if(button2.pressed())
    {
        box1.y = button2.c;
    };
}

function mouseReleased() {
    box1.released();
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
    box1.w = width;
    box1.h = height/2;
    button1.x = width /2;
    button1.y = height/4;
}
