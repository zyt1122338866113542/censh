$(function(){
    $(".myul1 >li:lt(3)").show();
    $(".myul2 >li:lt(3)").show();
    //一楼
    $(".buttom-more").click(function(){
       $(".myul1 >li:gt(3)").show();
    })
    $(".buttom-close").click(function(){
        $(".myul1 >li:gt(3)").hide();
    })
    //二楼
    $(".button-more-two").click(function(){
        $(".myul2 >li:gt(3)").show();
     })
    $(".button-close-two").click(function(){
        $(".myul2 >li:gt(3)").hide();
    })

    //排行榜1
    $("[data-toggle=tab1]").mouseenter(function(){
        var i=parseInt($(this).attr("data-i"));
        $(this).parent()
        .addClass("on").siblings().removeClass("on");
        $(`.ul${i}`).addClass("on").siblings().removeClass("on");
    })
     //排行榜2
    $("[data-toggle=tab2]").mouseenter(function(){
        var i=parseInt($(this).attr("data-i"));
        $(this).parent()
        .addClass("on").siblings().removeClass("on");
        $(`.ul${i}`).addClass("on").siblings().removeClass("on");
    })
    //排行榜3
    $("[data-toggle=tab3]").mouseenter(function(){
        var i=parseInt($(this).attr("data-i"));
        $(this).parent()
        .addClass("on").siblings().removeClass("on");
        $(`.ul${i}`).addClass("on").siblings().removeClass("on");
    })
    //排行榜4
    $("[data-toggle=tab4]").mouseenter(function(){
        var i=parseInt($(this).attr("data-i"));
        $(this).parent()
        .addClass("on").siblings().removeClass("on");
        $(`.ul${i}`).addClass("on").siblings().removeClass("on");
    })
    //页码
    $(".pagination").on("mouseenter","li",function(){
        var i=$(".pagination>li").index(this);
        //console.log(i)
        if(i==1){
            $(".pagination>li:eq(0)").addClass("disable");
            $(this).addClass("current");
           
        }else{
          $(".pagination>li:eq(0)").removeClass("disable");
            $(this).addClass("current").siblings().removeClass("current");
        }
        
    })



    
})