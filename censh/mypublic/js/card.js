
$(function(){
 var $content = $(".content");
    $(".content").click(function(e){
        
        if(e.target.className=="ff"){
            var $span = $(e.target);
            var $input = $span.parent().children("input")
            var n = parseInt($input.val());
            //实现加减
            if($span.html()=="+"){
                n+=1;
            }
            else if(n>=0){
                n--;
            }
            $input.val(n);
            //修改小计
            var $sum =$span.parent().parent().next().children("span").children("span");
            var $price = parseFloat(
                $span.parent().parent().prev().children().children(".final-price").html()
            ) 
            $sum.html($price*n);

            // 修改商品个数
            var num=0;
            var $numAll = $content.parent().next().find(".checked-count");
            $content.find(".qty-box>input").each(function(i,domElem){
                var $elem=$(domElem);
                num+=parseInt($elem.val());
            })
            $numAll.html(num);

            // 修改总价
            // 获取每个商品的小计
            var total=0;
            var $tatalAll = $("#totalAll");
            $content.find(".price1").each(function(i,domElem){
                var $elem=$(domElem);
                total+=parseFloat($elem.html());
            })
            $tatalAll.html(total);
            console.log(total)

            // 立即结算变颜色
            if(num>0){
                $("#pay").addClass("active");
            }else{
                $("#pay").removeClass("active");
            }
            // 删除
            $content.find("button").click(function(){
                $(this).parent().parent().remove();
                $numAll.html(num-n);
                $tatalAll.html(total-$price*n);
            })
        }
    })
    $("input:checkbox").click(function(){
       if($(this).attr("checked")){
           console.log(44444444444)
       }
    })
})
