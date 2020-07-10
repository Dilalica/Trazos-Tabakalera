let img;

function preload() {
    img = loadImage('./tabakalera.jpg');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    img.resize(100, 0);
}

function draw(){
    if(mouseIsPressed){
        image(
            img,
            mouseX - ( img.width / 2 ),
            mouseY - ( img.height / 2 )
        );

    }
}

