$(function(){
    $("[data-toggle=tab]").mouseenter(function(){
        var i=parseInt($(this).attr("data-index"));
        //console.log(i);
        var ul=$(this).parent()
        //li
        .addClass("active").siblings().removeClass("active")
        //ol
        .parent()
        //兄弟
        .next()//div
        //不管怎么变换，始终保持都是第一个孩子被选中，无法一对一的应对
        .children(["ul#u$"])
        
        //.addClass("u${i}")
        //.addClass("active").siblings().removeClass("active");
        //.siblings().removeClass("color");
    })
    $("[data-toggle=tab-one]").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})