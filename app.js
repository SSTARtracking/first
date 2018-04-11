var cursorX;
var cursorY;
var zoneDims = [250, 350, 180, 250];//corners (x1, x2, y1, y2)
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.cursor = "crosshair";

document.onmousemove = function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cursorX = e.pageX;
    cursorY = e.pageY;
    ctx.font = "30px Arial";
    ctx.fillText(cursorX+","+cursorY,cursorX,cursorY);
    drawZone(inZone(cursorX,cursorY));
}

function inZone(mouseX, mouseY) {
    var prediction = webgazer.getCurrentPrediction();
    var xtemp;
    var ytemp;
    if (prediction) {
        xtemp = prediction.x;
        ytemp = prediction.y;
        console.log("WOAH");
    }
    
    if (mouseX<zoneDims[1] && mouseX>zoneDims[0] && mouseY>zoneDims[2] && mouseY<zoneDims[3]) {
        return true;
    }
    else if (xtemp<zoneDims[1] && xtemp>zoneDims[0] && ytemp>zoneDims[2] && ytemp<zoneDims[3]) {
        console.log("WOOOOOOOOO");
        alert("yeah it actually worked");
        return true;
    }
    else {
        return false;
    }
}

function drawZone (i) {
    if (i==true) {
        ctx.fillStyle="rgba(0,255,0,0.5)";
    }
    else {
        ctx.fillStyle="rgba(255,0,0,0.5)";
    }
    ctx.fillRect(zoneDims[0],zoneDims[2]-20,zoneDims[1]-zoneDims[0],zoneDims[3]-zoneDims[2]);    
}
