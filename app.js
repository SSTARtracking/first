var cursorX;
var cursorY;
var zoneDims = [20, 120, 40, 90];//corners (x1, x2, y1, y2)
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
    if (mouseX<120 && mouseX>20 && mouseY>40 && mouseY < 90) {
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
    ctx.fillRect(zoneDims[0],20,zoneDims[1]-zoneDims[0],zoneDims[3]-zoneDims[2]);    
}
