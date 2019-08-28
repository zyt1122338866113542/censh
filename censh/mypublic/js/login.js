$(function(){
    $("#newLogin").click(function(){
        $(this).addClass("on")
        .next().removeClass("on")
        .parent()
        .next()
        .children(["div"])
        .removeClass("old")
        .addClass("login-content-mode")
        // .addClass("color")
    })
    $("#oldLogin").click(function(){
        $(this).addClass("on").prev().removeClass("on")
        .parent()
        .next()
        .children(":first-child")
        .addClass("login-content-mode old")
    })
    //表单验证
    var resName=false,resPwd=false;
    var $utxt=$(":text");
    var $upwd=$(":password");
    $utxt.blur(function(){
        resName=vail($(this),3,9,"用户名必须介于3-9之间")
    });
    $upwd.blur(function(){
        resPwd=vail($(this),6,8,"密码必须介于6-8之间")
    });
    $(":button").click(function(){
        if(!resName){
            $utxt.focus();
        }
        if(!resPwd){
            $upwd.focus();
        }
    })
    function vail($txt,minlength,maxlength,msg){
        var $span=$txt.next();
        var value=$txt.val();
        if(value.length>=minlength && value.length<=maxlength){
            $span.html(`<img src='../../image/login/ok.png' style="width:10px;height:10px;">`);
            return true;
        }else{
            console.log(11111)
            $span.html(`<img src='../../image/login/err.png' style="width:10px;height:10px;">${msg}`);
            return false;
        }
    }
})