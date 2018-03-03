webgazer.setGazeListener(function(data, elapsedTime) {
    var xprediction = data.x;
    var yprediction = data.y;
}).begin();


webgazer.showPredictionPoints(true);
console.log ('xprediction');
console.log ('yprediction')
webgazer.end ();

/* All the stuff that deals with video */
var video = document.querySelector("#videoElement");
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    // do something
}

