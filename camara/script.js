let capture;
let size = 100;

function setup(){
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.hide();
}

function draw(){
    if(keyIsDown(DOWN_ARROW)){
        size--;
    }
    if(keyIsDown(UP_ARROW)){
        size++;
    }
    if(mouseIsPressed){
        image(
            capture,
            mouseX - ( size / 2 ),
            mouseY - ( size / 2 ),
            size,
            size
        );
    }
}

