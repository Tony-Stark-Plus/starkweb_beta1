$(document).on('click','#refresh-captcha',function(){
    console.log('1');
    var url="/captcha/"+Math.random();
    $('#refresh-captcha > img').attr("src",url);
})
