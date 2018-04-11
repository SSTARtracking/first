var progress = 8;

function showLevelList(){
    synchronizeProgress();
    loadLevel(0);
    $("#levelLoad").hide();
    $("#levels").show();
    $("#myForm").hide();
    $("#back").hide();
    $("#sign-out").show();
    $("#navbar").show();
}

function loadLevel(i) {
    showLevel();
    $("#levelLoad").load("level"+i+".html");
}

function showLevel() {
    $("#myForm").hide();
    $("#levels").hide();
    $("#sign-out").hide();
    $("#back").show();
    $("#levelLoad").show();
    $("#navbar").hide();
}

function synchronizeProgress() {
    for (i=0; i<progress;i++) {
        $($(".load-level")[i]).removeClass("disabled");
    }
    $($(".load-level")[i-1]).addClass("pulse");
}