$(function(){
    //加
    $(".qty-plus").click(function(){
        var $input=$(this).prev();
        var html=$input.val();
        var n=parseInt(html.slice(0));
        n++;
        $input.val(n);
        var total=n*1499;
        $("#price").html(total);
        $(".num").html(n);
        $("#total").html(total);
    })
   //减
    $(".qty-minus").click(function(){
        var $input=$(this).next();
        var html=$input.val();
        var n=parseInt(html.slice(0));
        if(n>0){
        n--;  
        }
        $input.val(n);
        var total=n*1499;
        $("#price").html(total);
        $(".num").html(n);
        $("#total").html(total);   
    })
    //复选框
    $("#mycheckbox").click(function(){
        $("#pay").toggleClass("active");
    })
    //删除按钮
    $("#del").click(function(){
        $("#product").addClass("fale");
        $(".cart-footer").addClass("fale");
    })

 
})
7