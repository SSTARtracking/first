$(document).on('mousemove', function (e){
    $('#X').html("<b>X:</b>" + " " + e.pageX);
    $('#Y').html("<b>Y:</b>" + " " + e.pageY);
    $('#coords').css({left:e.pageX, top:e.pageY});
});
var gameIsRunning = false;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 30, 10)
        seconds = parseInt(timer % 30, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  "00:" + seconds;

        if (--timer < 0) {
            gameIsRunning = true;
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
//this is where you can modifies the time amount.
    var minutes= 30 ,
        display = document.querySelector('#time');
    startTimer(minutes, display);
};
var total = new Date();
var accuracy = 0;

while (gameIsRunning = true){
    
    if (860>X>600 && 260<Y<400)
    {
        var sec = 0;
        function pad ( val ) { return val > 9 ? val : "0" + val; }
        setInterval( function(){
            document.getElementById("seconds").innerHTML=pad(++sec%60);
            document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
        }, 1000);
        total.setSeconds(total + sec);
    }
    else 
    {
        total = total;
    }
}

function calculateAccuracy()
{
    accuracy = total / 30 * 100;
}