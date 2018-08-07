    $('#register').validate({
        rules:{
            uname:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            password : {
                required : true,
                isPwd : true,
                minlength:6,
                maxlength:25
            },
            password_confirmation: {
                required : true,
                isPwd : true,
                equalTo : "#password",
                minlength:6,
                maxlength:25
            }
        },
        messages : {
            uname : {
                required:'请输入用户名',
                minlength:"用户名不能少于3个字符"
            },
            email : {
                required : "请输入Email地址",
                email : "请输入正确的email地址"
            },
            password : {
                required : "请输入密码",
                minlength : "密码不能少于6个字符",
                maxlength:"密码不能多余25个字符"
            },
            password_confirmation: {
                required : "请输入确认密码",
                minlength : "确认密码不能小于6个字符",
                maxlength:"确认密码不能多余25个字符",
                equalTo : "两次输入密码不一致"
            }
        },
        //自定义错误消息放到哪里
        errorPlacement : function(error, element) {
            element.next().remove();//删除显示图标
            element.after('<p class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></p>');
            element.closest('.form-group').append(error);//显示错误消息提示
        },
        //给未通过验证的元素进行处理
        highlight : function(element) {
            $(element).closest('.form-group').addClass('has-error has-feedback');
        },
        //验证通过的处理
        success : function(label) {
            var el=label.closest('.form-group').find("input");
            el.next().remove();//与errorPlacement相似
            el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
            label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
            label.remove();
        }
    });
    