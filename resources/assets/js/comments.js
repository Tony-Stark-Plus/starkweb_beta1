//写评论
$(document).ready(function () {
    $(document).on('click', '#btn_comment', function () {
        $.ajax({
            type: 'get',
            url: '/comment/store',
            dataType: 'json',
            data: {
                "discussion_id": $(".form_comment > input[ name='discussion_id']").val(),
                "user_id": $(".form_comment > input[ name='user_id' ] ").val(),
                "body": $("input[ name='body_comment' ] ").val(),
                "type": $(".form_comment > input[ name='type' ] ").val(),
            },
            success: function (data) { //返回json结果
                $("input[ name='body' ]").val('');
                var add = '<div class="media border p-0">';
                add += '<img src=' + data.user.imgUrl + ' class="mr-1 mt-1" style="width:45px;">';
                add += '<div class="media-body">';
                add += '<a href="" class="style-a">' + data.user.uname + '</a>';
                add += ' <span class="style-time">刚刚</span>';
                add += ' <p class="main-text">' + data.comment.body + '</p>';
                add += '</div> </div>';
                $('.comments').append(add);
            },
            error: function (data) {

            }
        });
    });

    //写回复
    $(document).on('click', '.reply_trigger', function () {
        //控制回复表单的diapaly
        var show = $(this).next('.reply_form').css('display');
        var text = $(this).text();
        $(this).text(show == 'block' ? '回复' : '取消回复');
        $(this).next('.reply_form').css('display', show == 'block' ? 'none' : 'block');


    });
    $(document).on('click', '.reply_btn', function () {
        var $btn_dom = $(this);
        $.ajax({
            type: 'get',
            url: '/comment/reply',
            dataType: 'json',
            data: {
                "discussion_id": $(this).siblings("input[ name='discussion_id']").val(),
                "user_id": $(this).siblings("input[ name='user_id' ]").val(),
                "body": $(this).siblings("input[ name='body_reply' ]").val(),
                "parent_id": $(this).siblings("input[ name='parent_id' ]").val(),
                "reply_id": $(this).siblings("input[ name='reply_id']").val(),
                "reply_uname": $(this).siblings("input[ name='reply_uname']").val(),
                "type": $(".form_comment > input[ name='type' ] ").val(),
            },
            success: function (data) {
                $btn_dom.closest('.reply_form').css('display', 'none');
                $btn_dom.closest('.reply_form').prev('.reply_trigger').text('回复');
                var add = '<div class="media p-1 media">';
                add += '<img src=' + data.user.imgUrl + ' alt="" class="mr-1 mt-1" style="width:45px;">';
                add += '<div class="media-body">';
                add += '<a href="" class="style-a">' + data.user.uname + '</a>';
                add += '<span class="style-reply-font">&nbsp;回复&nbsp;</span>';
                add += '<a href="" class="style-a">' + data.reply_name + '</a>';
                add += '<span class="style-time">&nbsp;刚刚</span>';
                add += '<p class="main-text">' + data.comment.body + '</p>';
                add += '</div></div>';
                $btn_dom.closest('.media_main').append(add);

            },
            error: function (data) {

            }
        });
    });
});