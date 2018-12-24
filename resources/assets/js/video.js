// 播放页面禁止滚动
//pc
$(document).on('mouseover', '.video-part', function(){
    $("body").css("overflow","hidden");
    $(".change-lesson").css("display","block");
});
$(document).on('mouseout', '.video-part', function(){
    $("body").css("overflow","scroll");
    $(".change-lesson").css("display","none");
});
//mobile
$(document).on('touchstart', '.video-part', function(){
    $("body").css("overflow","hidden");
    $(".change-lesson").css("display","block");
});
$(document).on('touchend', '.video-part', function(){
    $("body").css("overflow","scroll");
    $(".change-lesson").css("display","none");
});
$(document).ready(function () {
});
