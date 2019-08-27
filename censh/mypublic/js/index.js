$(function(){

    $("[data-toggle=tab]").mouseenter(function(){
        var i=parseInt($(this).attr("data-index"));
        //给每一个li加点击效果
        $(this).parent()
        //li
        .addClass("active").siblings().removeClass("active");
        $(`#img${i}`).addClass("active").parent().siblings().children("img").removeClass("active");
        //给对应的下标设置是否显示
        $(`#u${i}`).addClass("active").siblings().removeClass("active");
    })
    //store的tab切换
    $("[data-toggle=tab-two]").mouseenter(function(){
        var i=parseInt($(this).attr("data-index"));
        //给每一个a加点击效果
        $(this).addClass("actived").siblings().removeClass("actived");
        //给对应的下标设置是否显示
        $(`#ul-${i}`).addClass("active").siblings().removeClass("active");
    })
    //rank的tab切换
    $("[data-toggle=tab-one]").mouseenter(function(){
        var i=parseInt($(this).attr("data-index"));
        //给自己添加效果
        $(this).addClass("active").siblings().removeClass("active");
        //给对应的下标设置是否显示
        $(`#listu${i}`).addClass("active").siblings().removeClass("active");
    })
})