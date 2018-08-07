$(document).on('mouseover','.learn_area',function(){
    console.log('t');
    $(this).css('width','100%');
});
$(document).on('mouseout','.learn_area',function(){
    console.log('q');
    $(this).css('width','96%');
});