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
})