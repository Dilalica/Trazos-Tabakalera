function setup(){
    createCanvas(windowWidth, windowHeight);
    textSize(40);
    background('black');
    textFont('Helvetica');
    fill('pink');
    frameRate(20);
    text('Write. Use mouse for spacing. Refresh to star over.', 50, 50);
}


let kerning = {
    a: 20,
    b: 20,
    c: 20,
    d: 20,
    e: 20,
    f: 10,
    g: 20,
    h: 20,
    i: 10,
    j: 10,
    k: 20,
    l: 10,
    m: 30,
    n: 20,
    o: 20,
    p: 20,
    q: 20,
    r: 15,
    s: 20,
    t: 10,
    u: 20,
    v: 20,
    w: 30,
    x: 20,
    y: 20,
    z: 20
}


function keyPressed() {
    for(letter in kerning){
        if (key === letter){
            text(letter, mouseX, mouseY);
            mouseX = mouseX + kerning[letter];
        }
    }
}









