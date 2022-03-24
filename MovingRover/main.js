canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;

background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;



    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imagetag, 0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);   
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
    }
    if(keypressed=="40"){
        down();
    }
    if(keypressed=="37"){
        left();
    }
    if(keypressed=="39"){
        right();
    }
}

function down(){
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
}
function up(){
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}