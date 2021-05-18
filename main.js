diffirence=0;
rightWrist=0;
leftWrist=0;
function preload(){

}
function setup(){
    canvas=createCanvas(450,480);
    canvas.position(660,100);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses)
}
function modeLoaded(){
    console.log("poseNet model is loaded");
}

function draw(){
document.getElementById("name").innerHTML="the font size of the text is="+diffirence+"px";
background("#23cdeb");
textSize(150);
fill("#ded712");
text("shubh",30,200);
}
function gotPoses (results){
    if (results.length > 0) {
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        diffirence=floor(leftWristx-rightWristx);
        leftWristx=results[0].pose.leftWrist.x;
    }
}