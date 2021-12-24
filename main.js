song1 = "";
song2 = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCaptare(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music copy.mp3");
}
