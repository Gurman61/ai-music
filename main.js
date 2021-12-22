var song1="music.mp3";
var song2="music-2.mp3";

function preload()
{
    song1="music.mp3";
    song2="music-2.mp3";
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture();
    video.hide();

}

function draw()
{
    image(video,0,0,300,300);
}