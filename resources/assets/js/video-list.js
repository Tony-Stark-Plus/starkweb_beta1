$(document).on('mouseover', '.video-list-item', function(){
   $(this).css('background-color','#EEE');
});
$(document).on('mouseout', '.video-list-item', function(){
    $(this).css('background-color','#fff');
 });
//mobile
$(document).on('click', '.video-list-item', function(){
    $(this).css('background-color','#EEE')
});

// $(document).on('click', '.spec', function(){
//     $(this).addClass('active');
// });

