$(document).on('mousemove', function (e){
    $('#X').html("<b>X:</b>" + " " + e.pageX);
    $('#Y').html("<b>Y:</b>" + " " + e.pageY);
    $('#coords').css({left:e.pageX, top:e.pageY});
});