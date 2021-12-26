song1 = "";
song2 = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    var poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet is intialized!")
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("Owl_City_Fireflies.mp3");
    song1.setVolume(1);
    song1.rate(1);
    song1.setVolume(1);
    
    song2.setVolume(1);
    song2.rate(1);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}