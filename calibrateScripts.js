function hasBeenClicked(i) {
    $($(".cal-but")[i]).addClass("disabled");
    // var num = Math.floor(Math.random()*12);
    $($(".cal-but")[i+1]).removeClass("disabled");

    // if (num>11) {
    //     $($(".cal-but")[num]).removeClass("disabled");
    // }
    // else {
    //     $($(".cal-but")[1]).removeClass("disabled");
    // }

    if (i==11) {
        showLevelList();
    }

}