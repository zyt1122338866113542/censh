$(function(){
    $("#sm").on("click","li",function(){
        $(this).addClass("current").siblings().removeClass("current");
        var i = $(this).attr("data-index");
        $(`[data-index=${i}]`).addClass("current").siblings().removeClass("current");
    })
    
    // 放大镜
    var $mask = $("#mask");
    var $smask = $("#super-mask");
    var $divLg = $("div-lg");
    var max = 320;
    $smask.mouseover(function(){
        $(this).next().show();
        $(this).prev().show();
    })
    $smask.mouseleave(function(){
        $(this).next().hide();
        $(this).prev().hide();
    })
    $smask.mousemove(function(e){
        var left = e.offsetX - 150;
        var top = e.offsetY -150;
        console.log(left,top)
        if(left<0) left = 0;
        else if(left>max) left=max;
        if(top<0) top=0;
        else if(top>max) top=max;
        $mask.css({left,top});
        var backgroundPosition = `${-parseInt(left)*1.2}px ${-parseInt(top)*1.2}px`;
        $(this).next().css({backgroundPosition});
        

    })
})