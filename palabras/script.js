let word = 'word';

words = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    let inp = createInput('');
    inp.input(function() {
        word = this.value();
    });
}

function draw(){
    background(255);
    if(mouseIsPressed){
        words.push({
            x: mouseX,
            y: mouseY
        });
    }
    words.forEach(w => {
        textAlign(CENTER, CENTER);
        text(word, w.x, w.y);
    });
}

