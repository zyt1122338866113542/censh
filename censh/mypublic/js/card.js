$(function(){
    //加
    // $(".qty-plus").click(function(){
    //     var $input=$(this).prev();
    //     console.log($input)
    //     var html=$input.val();
    //     console.log(html)
    //     var n=parseInt(html.slice(0));
    //     n++;
    //     $input.val(n);
    //     var total=n*1499;
    //     $("#price").html(total);
    //     $(".num").html(n);
    //     $("#total").html(total);
    // })
   //减
    // $(".qty-minus").click(function(){
    //     var $input=$(this).next();
    //     var html=$input.val();
    //     var n=parseInt(html.slice(0));
    //     if(n>0){
    //     n--;  
    //     }
    //     $input.val(n);
    //     var total=n*1499;
    //     $("#price").html(total);
    //     $(".num").html(n);
    //     $("#total").html(total);   
    // })
    // //复选框
    // $("#mycheckbox").click(function(){
    //     $("#pay").toggleClass("active");
    // })
    // //删除按钮
    // $("#del").click(function(){
    //     $("#product").addClass("fale");
    //     $(".cart-footer").addClass("fale");
    // })


    $(".content").click(function(e){
       // console.log($span)
       //console.log(2222222222)
        if(e.target.className=="ff"){
            var $span = $(e.target);
            var $input = $span.parent().children("input")
            var n = parseInt($input.val());
            //实现加减
            if($span.html()=="+"){
                n+=1;
            }
            else if(n>1){
                n--;
            }
            $input.val(n);
            //修改小计
            var $sum = $span.parent().parent().next().children("span").children("span");
            var $price = parseFloat(
                $span.parent().parent().prev().children(1).html()
            ) 
            console.log($price)
            // var sum = $price*n;
            //  $sum.html(sum);
            // console.log($sum)
        }
    })
 
})
7