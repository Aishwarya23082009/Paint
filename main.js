var mouseEvent= "empty";
var last_position_x, last_position_y;

Canvas= document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

 color= "red";
 width_of_line= 1;
 radius= 40;    


Canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_the_line").value;
    radius= document.getElementById("radius").value;  
mouseEvent= "mousedown";
}

Canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){

    current_position_x=e.clientX - Canvas.offsetLeft;
    current_position_y=e.clientY - Canvas.offsetTop;

    if(mouseEvent=="mousedown"){
  
        console.log("Current position of x and y coordinates");
        console.log("X="+ current_position_x + ",Y=" + current_position_y);

        ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= width_of_line;
ctx.arc(current_position_x,current_position_y,radius,0,2*Math.PI);
ctx.stroke();
    }
    
    last_position_x=current_position_x;
    last_position_y=current_position_y;
}
Canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(){

}

function clear_area(){
    ctx.clearRect(0,0,Canvas.width,Canvas.height);
}