$(function(){
  // 点击之后填写个人信息
  $(".add-icon").click(function(){
    $("#billing-new-address-form").removeClass("hide");
    // 填写完成之后保存之后隐藏
    $(".saveAddr").click(function(){
      $("#billing-new-address-form").addClass("hide");
      $("#section-step-reserveBilling").removeClass("hide");
      // 修改下单人信息
       $(".edit-contact").click(function(){
        $(".reserveBilling-box .fields input").attr("disabled",false);
      })
    })
  })

  // 发票信息
  $("#fapiao-form label").click(function(){
    $(".fapiao-content .fapiao-title").removeClass("hide");
    $(".fapiao-content button").removeClass("hide");
    var $val1=$(".val1");
    var $val0=$(".val0");
    $("#fapiao-form select").click(function(){
      if(!$val0.attr("selected")){
        console.log(111)
        if($val0.value="0"){
          $(".added_value_tax").removeClass("hide");
        }
      }

   // 确认按钮---不对
    $(".confirm-fapiao").click(function(){
      $(".fapiao-content added_value_tax").addClass("hide");
    })
   
    })
    
    
  })
  
})