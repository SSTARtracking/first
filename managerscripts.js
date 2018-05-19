window.onload = function() {
    $("#reward").hide();
    $("#myForm").show();
    $("#levels").hide();
    $("#sign-out").hide();
    $("#plotting_canvas").addClass("hidden");

}

var progress = 1;
var levelCurrentlyLoaded;
function showLevelList(){
    synchronizeProgress();
    $("#levelLoad").unload("level"+levelCurrentlyLoaded+".html");
    $("#levelLoad").hide();
    $("#levels").show();
    $("#myForm").hide();
    $("#back").hide();
    $("#sign-out").show();
}

function loadLevel(i) {
    levelCurrentlyLoaded = i;
    $("#levelLoad").load("level"+i+".html");
    showLevel();
}

function calibrate () {
    $("#levelLoad").load("calibrate.html");
    showLevel();
}

function showLevel() {
    $("#myForm").hide();
    $("#levels").hide();
    $("#sign-out").hide();
    $("#back").show();
    $("#levelLoad").show();
}

function synchronizeProgress() {
    for (i=0; i<progress;i++) {
        $($(".load-level")[i]).removeClass("disabled");
    }
    $($(".load-level")[i-1]).addClass("pulse");
}

var vid = document.getElementById("myVideo");
vid.onended = function() {
    // alert("The video has ended");
    console.log("ended");
    loadReward();
};

function loadReward() {
    $("#myVideo").hide();
    $("#reward").show();
}