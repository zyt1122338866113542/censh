$(function(){
    // 先搭样子
    var i=0;
    var LIWIDTH=1200;
    var DURATION=500;
    var LICOUNT=4;
    var ulImgs=document.getElementById("ul-imgs");
    var ulIdxs=document.getElementById("ul-idxs")
    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    //用开关，控制，上次动画没有播放完，下次动画不能开始！
    var canClick=true;
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){//如果要看当前位置右边的图片，是不会出问题的
          ulImgs.className="transition";
        }else{//只有i=0在开头，且还要看左边的图片时，才会出问题
          //为了避免用户再次看到偷梁换柱的效果，先把transition class去掉
          ulImgs.className="";
          //将ulImgs拉取到最左侧
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          //定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      }
      console.log(i);
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
    }
    //左右按钮点击
    btnRight.onclick=function(){
        //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
        move(1)
    }
    //两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
    function move(n){
    if(canClick){//只有可以单击时
        moveTo(i+n);//才调用真正移动ul的方法
        canClick=false;//马上把开关关上，禁止再次点击
        //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
        setTimeout(function(){
        canClick=true;
            },DURATION+100);
        }
    }
    btnLeft.onclick=function(){
        move(-1);
    }
    //
    var interval=3000;//每次轮播之间间隔3秒
    var timer=setInterval(function(){
    moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
    clearInterval(timer);
    }
    banner.onmouseout=function(){
    timer=setInterval(function(){
        moveTo()
        },3000);
    }

    ulIdxs.onclick=function(e){
        if(canClick){
          var li=e.target;
          if(li.nodeName=="LI"){
            if(li.className!=="active"){
              for(var i=0;i<lis.length;i++){
                if(lis[i]==li){
                  break;
                }
              }
              moveTo(i);
              setTimeout(function(){
                canClick=true;
              },DURATION);
            }
          }
        }
      }
   
})