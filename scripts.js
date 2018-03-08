var xprediction;
var yprediction;
webgazer.setGazeListener(function(data, elapsedTime) {
    if(data == null) {
        return
    }
    xprediction = data.x;
    yprediction = data.y;
    console.log(elapsedTime);
}).begin();

var prediction = webgazer.getCurrentPrediction();
if (prediction) {
    var x = prediction.x;
    var y = prediction.y;
}

webgazer.showPredictionPoints(true);


/* All the stuff that deals with video */
//var video = document.querySelector("#videoElement");
 
var video = document.querySelector("#videoElement");


navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
// if (navigator.getUserMedia) {       
//     navigator.getUserMedia({video: true}, handleVideo, videoError);
// }
 
// function handleVideo(stream) {
//     video.src = window.URL.createObjectURL(stream);
// }
 
function videoError(e) {
    // do something
}
console.log (xprediction);
console.log (yprediction);

